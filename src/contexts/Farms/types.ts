import { Contract } from 'web3-eth-contract'

export interface Farm {
  pid: number
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenLpContract: Contract
  tokenAddress: string
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  id: string
  tokenSymbol: string
  depositUrl: string
  isPair : boolean
  isDirectPair : boolean
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}
