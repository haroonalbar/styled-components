import React from 'react'
import { StyledHeader } from './styled/Header.styled'

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader bg='yellow'>
        <h1>Header</h1>
    </StyledHeader>
  )
}

export default Header;