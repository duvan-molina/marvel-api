import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'
import { DataPropvider } from '../context/getData'
import Layout from '../components/Layout'
import Home from '../pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DataPropvider>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </DataPropvider>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background-color: rgba(168, 168, 168, .10);
  }
`


export default App
