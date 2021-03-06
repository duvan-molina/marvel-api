import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'
import { DataPropvider } from '../context/getData'
import { OpenProvider } from '../context/useIsOpen'
import Layout from '../components/Layout'
import Home from '../pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DataPropvider>
        <OpenProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Layout>
              <Switch location={{ pathname: '/' }}>
                <Route exact path='/' component={Home} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </OpenProvider>
      </DataPropvider>
    </ThemeProvider >
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
    color: ${({ theme }) => theme.palette.colorFont};
  }
`


export default App
