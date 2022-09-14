import { Erc20 } from '~contract/contracts';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetDataPropsParams,
  GetPricePerShareParams,
  GetUnderlyingTokensParams,
} from '~position/template/app-token.template.types';

export type VaultTokenDataProps = {
  liquidity: number;
  reserve: number;
};

export abstract class VaultTokenFetcher extends AppTokenTemplatePositionFetcher<Erc20, VaultTokenDataProps> {
  abstract vaultAddress: string;
  abstract underlyingTokenAddress: string;
  reserveAddress?: string;

  getContract(address: string): Erc20 {
    return this.appToolkit.globalContracts.erc20({ address, network: this.network });
  }

  async getAddresses(): Promise<string[]> {
    return [this.vaultAddress];
  }

  async getUnderlyingTokenAddresses(_params: GetUnderlyingTokensParams<Erc20>) {
    return this.underlyingTokenAddress;
  }

  async getReserve({ multicall, appToken }: GetPricePerShareParams<Erc20, VaultTokenDataProps>) {
    const underlying = multicall.wrap(this.appToolkit.globalContracts.erc20(appToken.tokens[0]));
    const reserveRaw = await underlying.balanceOf(this.reserveAddress ?? this.vaultAddress);
    return Number(reserveRaw) / 10 ** appToken.tokens[0].decimals;
  }

  async getPricePerShare(opts: GetPricePerShareParams<Erc20, VaultTokenDataProps>) {
    const { appToken } = opts;
    const reserve = await this.getReserve(opts);
    return reserve / appToken.supply;
  }

  async getDataProps(opts: GetDataPropsParams<Erc20, VaultTokenDataProps>) {
    const { appToken } = opts;
    const reserve = await this.getReserve(opts);
    const liquidity = reserve * appToken.tokens[0].price;
    return { reserve, liquidity };
  }
}
