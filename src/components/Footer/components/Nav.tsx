import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xce9aFAF5b0dA6cE0366aB40435A48ccff65d2ED7#code"
      >
        Token Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x6a1c61D4FCfD36Ca908C8090418cf2B292951f8A#code"
      >
        Master Contract
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/bobaswap">
        Telegram
      </StyledLink>
      {/* <StyledLink target="_blank" href="https://github.com/bobaswap">
        Github
      </StyledLink> */}
      <StyledLink target="_blank" href="https://twitter.com/BobaSwap">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
