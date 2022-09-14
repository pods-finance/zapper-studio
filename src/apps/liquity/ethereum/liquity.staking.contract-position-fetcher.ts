import { Inject, Injectable } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { GetTokenBalancesParams } from '~position/template/contract-position.template.types';
import {
  SingleStakingFarmDefinition,
  SingleStakingFarmTemplateContractPositionFetcher,
} from '~position/template/single-staking.template.contract-position-fetcher';
import { Network } from '~types/network.interface';

import { LiquityContractFactory, LiquityStaking } from '../contracts';
import LIQUITY_DEFINITION from '../liquity.definition';

const FARMS = [
  {
    address: '0x4f9fbb3f1e99b56e0fe2892e623ed36a76fc605d',
    stakedTokenAddress: '0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d',
    rewardTokenAddresses: ['0x5f98805a4e8be255a32880fdec7f6728c6568ba0', ZERO_ADDRESS], // LUSD and ETH
  },
];

@Injectable()
export class EthereumLiquityStakingContractPositionFetcher extends SingleStakingFarmTemplateContractPositionFetcher<LiquityStaking> {
  appId = LIQUITY_DEFINITION.id;
  groupId = LIQUITY_DEFINITION.groups.staking.id;
  network = Network.ETHEREUM_MAINNET;
  groupLabel = 'Staked';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(LiquityContractFactory) protected readonly contractFactory: LiquityContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): LiquityStaking {
    return this.contractFactory.liquityStaking({ address, network: this.network });
  }

  async getFarmDefinitions(): Promise<SingleStakingFarmDefinition[]> {
    return FARMS;
  }

  async getRewardRates() {
    return [0, 0];
  }

  async getStakedTokenBalance({ contract, address }: GetTokenBalancesParams<LiquityStaking>) {
    return contract.stakes(address);
  }

  async getRewardTokenBalances({ contract, address }: GetTokenBalancesParams<LiquityStaking>) {
    return Promise.all([contract.getPendingLUSDGain(address), contract.getPendingETHGain(address)]);
  }
}
