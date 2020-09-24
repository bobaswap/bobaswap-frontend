import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}
export const getWethContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.weth
}

export const getMasterChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChef
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          tokenLpContract,
          lpAddress,
          lpContract,
          depositUrl,
          isPair,
          isDirectPair,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          tokenLpContract,
          earnToken: 'BOBA',
          earnTokenAddress: sushi.contracts.sushi.options.address,
          icon,
          depositUrl,
          isPair,
          isDirectPair,
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
  return masterChefContract.methods.pendingBoba(pid, account).call()
}

export const getTotalLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  tokenLpContract,
  pid,
  isPair,
  isDirectPair,
) => {  
  // Get balance of the token address
  let tokenAmountWholeLP=0
  if(isDirectPair){
    tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(tokenLpContract.options.address)
    .call()
  }else{
    tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  }
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  let balance=0
  if(isDirectPair){
    balance = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
    balance = 2*balance
  }else if(isPair){
    balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  }else{
    balance = await tokenContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  }
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  let lpContractWeth=0
  if(isDirectPair){
    lpContractWeth = await wethContract.methods
    .balanceOf(tokenLpContract.options.address)
    .call()
  }else{
    lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  }
  // Return p1 * w1 * 2
  let portionLp = new BigNumber(1)
  if(isDirectPair){
    const lpBalance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
    portionLp = new BigNumber(lpBalance).div(new BigNumber(totalSupply))
  }else if(isPair){
    portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  }


  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  const tokenPriceInWeth = wethAmount.div(tokenAmount)
  
return {
    tokenAmount,
    wethAmount,
    totalWethValue: isPair&&!isDirectPair?totalLpWethValue.div(new BigNumber(10).pow(18)):tokenPriceInWeth.times(balance).times(portionLp).div(new BigNumber(10).pow(18)),
    tokenPriceInWeth,
    poolWeight: await getPoolWeight(masterChefContract, pid),
    balance: new BigNumber(balance).div(new BigNumber(10).pow(18)),
    isPair,
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.sushi.methods.totalSupply().call())
}

export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}
