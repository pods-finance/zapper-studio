/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface PlatypusFinanceVotingEscrowInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment;
    'claim()': FunctionFragment;
    'claimable(address)': FunctionFragment;
    'decimals()': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'generationRate()': FunctionFragment;
    'getStakedNft(address)': FunctionFragment;
    'getStakedPtp(address)': FunctionFragment;
    'getVotes(address)': FunctionFragment;
    'initialize(address,address,address)': FunctionFragment;
    'invVoteThreshold()': FunctionFragment;
    'isUser(address)': FunctionFragment;
    'masterPlatypus()': FunctionFragment;
    'maxCap()': FunctionFragment;
    'name()': FunctionFragment;
    'nft()': FunctionFragment;
    'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
    'owner()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'ptp()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setGenerationRate(uint256)': FunctionFragment;
    'setInvVoteThreshold(uint256)': FunctionFragment;
    'setMasterPlatypus(address)': FunctionFragment;
    'setMaxCap(uint256)': FunctionFragment;
    'setNftAddress(address)': FunctionFragment;
    'setWhitelist(address)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unpause()': FunctionFragment;
    'unstakeNft()': FunctionFragment;
    'users(address)': FunctionFragment;
    'whitelist()': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'claim'
      | 'claimable'
      | 'decimals'
      | 'deposit'
      | 'generationRate'
      | 'getStakedNft'
      | 'getStakedPtp'
      | 'getVotes'
      | 'initialize'
      | 'invVoteThreshold'
      | 'isUser'
      | 'masterPlatypus'
      | 'maxCap'
      | 'name'
      | 'nft'
      | 'onERC721Received'
      | 'owner'
      | 'pause'
      | 'paused'
      | 'ptp'
      | 'renounceOwnership'
      | 'setGenerationRate'
      | 'setInvVoteThreshold'
      | 'setMasterPlatypus'
      | 'setMaxCap'
      | 'setNftAddress'
      | 'setWhitelist'
      | 'symbol'
      | 'totalSupply'
      | 'transferOwnership'
      | 'unpause'
      | 'unstakeNft'
      | 'users'
      | 'whitelist'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'claim', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimable', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'generationRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getStakedNft', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getStakedPtp', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getVotes', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'invVoteThreshold', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isUser', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'masterPlatypus', values?: undefined): string;
  encodeFunctionData(functionFragment: 'maxCap', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nft', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'onERC721Received',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ptp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setGenerationRate', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setInvVoteThreshold', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setMasterPlatypus', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setMaxCap', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setNftAddress', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setWhitelist', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unstakeNft', values?: undefined): string;
  encodeFunctionData(functionFragment: 'users', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'whitelist', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'generationRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStakedNft', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStakedPtp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'invVoteThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'masterPlatypus', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxCap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nft', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ptp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setGenerationRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInvVoteThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMasterPlatypus', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMaxCap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setNftAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWhitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unstakeNft', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'users', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Burn(address,uint256)': EventFragment;
    'Claimed(address,uint256)': EventFragment;
    'Mint(address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(address)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'StakedNft(address,uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
    'Unstaked(address,uint256)': EventFragment;
    'UnstakedNft(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Claimed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StakedNft'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unstaked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UnstakedNft'): EventFragment;
}

export interface BurnEventObject {
  account: string;
  value: BigNumber;
}
export type BurnEvent = TypedEvent<[string, BigNumber], BurnEventObject>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface ClaimedEventObject {
  user: string;
  amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[string, BigNumber], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface MintEventObject {
  beneficiary: string;
  value: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface StakedNftEventObject {
  user: string;
  nftId: BigNumber;
}
export type StakedNftEvent = TypedEvent<[string, BigNumber], StakedNftEventObject>;

export type StakedNftEventFilter = TypedEventFilter<StakedNftEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UnstakedEventObject {
  user: string;
  amount: BigNumber;
}
export type UnstakedEvent = TypedEvent<[string, BigNumber], UnstakedEventObject>;

export type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;

export interface UnstakedNftEventObject {
  user: string;
  nftId: BigNumber;
}
export type UnstakedNftEvent = TypedEvent<[string, BigNumber], UnstakedNftEventObject>;

export type UnstakedNftEventFilter = TypedEventFilter<UnstakedNftEvent>;

export interface PlatypusFinanceVotingEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PlatypusFinanceVotingEscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    claimable(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    generationRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakedNft(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakedPtp(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getVotes(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _ptp: PromiseOrValue<string>,
      _masterPlatypus: PromiseOrValue<string>,
      _nft: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    invVoteThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    isUser(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    masterPlatypus(overrides?: CallOverrides): Promise<[string]>;

    maxCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    ptp(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    setGenerationRate(
      _generationRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setInvVoteThreshold(
      _invVoteThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setMasterPlatypus(
      _masterPlatypus: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setMaxCap(
      _maxCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setNftAddress(
      _nft: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setWhitelist(
      _whitelist: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    unstakeNft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        lastRelease: BigNumber;
        stakedNftId: BigNumber;
      }
    >;

    whitelist(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  claimable(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  deposit(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  generationRate(overrides?: CallOverrides): Promise<BigNumber>;

  getStakedNft(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  getStakedPtp(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  getVotes(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _ptp: PromiseOrValue<string>,
    _masterPlatypus: PromiseOrValue<string>,
    _nft: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  invVoteThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  isUser(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  masterPlatypus(overrides?: CallOverrides): Promise<string>;

  maxCap(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  ptp(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  setGenerationRate(
    _generationRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setInvVoteThreshold(
    _invVoteThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setMasterPlatypus(
    _masterPlatypus: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setMaxCap(
    _maxCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setNftAddress(
    _nft: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setWhitelist(
    _whitelist: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  unstakeNft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  users(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      lastRelease: BigNumber;
      stakedNftId: BigNumber;
    }
  >;

  whitelist(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    claimable(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    deposit(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    generationRate(overrides?: CallOverrides): Promise<BigNumber>;

    getStakedNft(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getStakedPtp(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _ptp: PromiseOrValue<string>,
      _masterPlatypus: PromiseOrValue<string>,
      _nft: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    invVoteThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    isUser(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    masterPlatypus(overrides?: CallOverrides): Promise<string>;

    maxCap(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    ptp(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGenerationRate(_generationRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setInvVoteThreshold(_invVoteThreshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setMasterPlatypus(_masterPlatypus: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setMaxCap(_maxCap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setNftAddress(_nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setWhitelist(_whitelist: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    unstakeNft(overrides?: CallOverrides): Promise<void>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        lastRelease: BigNumber;
        stakedNftId: BigNumber;
      }
    >;

    whitelist(overrides?: CallOverrides): Promise<string>;

    withdraw(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Burn(address,uint256)'(account?: PromiseOrValue<string> | null, value?: null): BurnEventFilter;
    Burn(account?: PromiseOrValue<string> | null, value?: null): BurnEventFilter;

    'Claimed(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
    ): ClaimedEventFilter;
    Claimed(user?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): ClaimedEventFilter;

    'Mint(address,uint256)'(beneficiary?: PromiseOrValue<string> | null, value?: null): MintEventFilter;
    Mint(beneficiary?: PromiseOrValue<string> | null, value?: null): MintEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'Staked(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
    ): StakedEventFilter;
    Staked(user?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): StakedEventFilter;

    'StakedNft(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      nftId?: PromiseOrValue<BigNumberish> | null,
    ): StakedNftEventFilter;
    StakedNft(user?: PromiseOrValue<string> | null, nftId?: PromiseOrValue<BigNumberish> | null): StakedNftEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    'Unstaked(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
    ): UnstakedEventFilter;
    Unstaked(user?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): UnstakedEventFilter;

    'UnstakedNft(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      nftId?: PromiseOrValue<BigNumberish> | null,
    ): UnstakedNftEventFilter;
    UnstakedNft(
      user?: PromiseOrValue<string> | null,
      nftId?: PromiseOrValue<BigNumberish> | null,
    ): UnstakedNftEventFilter;
  };

  estimateGas: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    claimable(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    generationRate(overrides?: CallOverrides): Promise<BigNumber>;

    getStakedNft(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getStakedPtp(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _ptp: PromiseOrValue<string>,
      _masterPlatypus: PromiseOrValue<string>,
      _nft: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    invVoteThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    isUser(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    masterPlatypus(overrides?: CallOverrides): Promise<BigNumber>;

    maxCap(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    ptp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setGenerationRate(
      _generationRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setInvVoteThreshold(
      _invVoteThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setMasterPlatypus(
      _masterPlatypus: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setMaxCap(
      _maxCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setNftAddress(
      _nft: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setWhitelist(
      _whitelist: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    unstakeNft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    users(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    claimable(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    generationRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakedNft(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakedPtp(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVotes(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _ptp: PromiseOrValue<string>,
      _masterPlatypus: PromiseOrValue<string>,
      _nft: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    invVoteThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUser(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    masterPlatypus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ptp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    setGenerationRate(
      _generationRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setInvVoteThreshold(
      _invVoteThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setMasterPlatypus(
      _masterPlatypus: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setMaxCap(
      _maxCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setNftAddress(
      _nft: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      _whitelist: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    unstakeNft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    users(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
