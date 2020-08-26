import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={{ fontFamily: 'arial' }}>
      <GlobalStyle />
      <div>
        hello world
      </div>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #00000000;
  }
`


export default App
