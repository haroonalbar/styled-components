import { useState } from 'react'
import { Container } from './components/styled/Container.styled'
import Header from './components/Header'
import { StyledHeader } from './components/styled/Header.styled'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StyledHeader bg='red'>
        <h1>Hello</h1>
      </StyledHeader> */}
      <Header></Header>
      <Container>
       <h1>Hello World</h1> 
      </Container>
    </>
  )
}

export default App
