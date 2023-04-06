import { useState } from 'react'
import { Container } from './components/styled/Container.styled'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { StyledHeader } from './components/styled/Header.styled'

const theme={
  color:{
  header:'#ebfbff',
  body: '#fff',
  footer: '#003333',
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme= {theme}>
    <>
      {/* <StyledHeader bg='red'>
        <h1>Hello</h1>
      </StyledHeader> */}
      <Header></Header>
      <Container>
       <h1>Hello World</h1> 
      </Container>
    </>
    </ThemeProvider>
  )
}

export default App
