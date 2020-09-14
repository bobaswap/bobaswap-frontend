import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import styled from 'styled-components'
import Spacer from '../../../components/Spacer'

const PlatformStats: React.FC = () => {
  const [sumWeth, setsumWeth] = useState<number>()
  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()
  let sumWethInETH = 0
  if (allStakedValue && allStakedValue.length) {
    sumWethInETH = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].isPair?allStakedValue[i].totalWethValue.toNumber():(allStakedValue[i].tokenPriceInWeth.times(allStakedValue[i].balance)).toNumber() || 0),
      0,
    )
  }

  // const bobaIndex = farms.findIndex(
  //   ({ tokenSymbol }) => tokenSymbol === 'BOBA',
  // )

  // const bobaPrice =
  //   bobaIndex >= 0 && allStakedValue[bobaIndex]
  //     ? allStakedValue[bobaIndex].tokenPriceInWeth
  //     : new BigNumber(0)


  useEffect(() => {
    fetch("https://api.coincap.io/v2/rates/ethereum")
      .then(res => res.json())
      .then(
        (result) => {
          setsumWeth(result.data.rateUsd * sumWethInETH)
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      )
  }, [setsumWeth,sumWethInETH])
  
  return (
    <StyledWrapper>
        {/* <Card>
        <CardContent>
          <Label text="BOBA Price ($)" />
          <Value
            value={bobaPrice.toNumber()}
          />
        </CardContent>
        <Footnote>
          The Latest
          <FootnoteValue></FootnoteValue>
        </Footnote>
        </Card>
        <Spacer /> */}
        <Card>
        <CardContent>
          <Label text="Total Value Locked ($)" />
          <Value
            value={sumWeth}
          />
        </CardContent>
        <Footnote>
          Platform
          <FootnoteValue>TVL</FootnoteValue>
        </Footnote>
        </Card>
        <Spacer />
        <Card>
        <CardContent>
          <Label text="Max BOBA Supply" />
          <Value
            value={"1,000,000"}
          />
        </CardContent>
        <Footnote>
          &nbsp;
          <FootnoteValue>&nbsp;</FootnoteValue>
        </Footnote>
        </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.grey[400]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`


export default PlatformStats