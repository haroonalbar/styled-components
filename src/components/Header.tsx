import React from 'react'
import { StyledHeader } from './styled/Header.styled'
import { Container } from './styled/Container.styled'

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
        <Container>
            <h1>Header</h1>
        </Container>
    </StyledHeader>
  )
}

export default Header;