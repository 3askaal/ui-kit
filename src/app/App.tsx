import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import { Wrapper, FormResetStyle, GlobalStyle, theme } from '@core'
import { PlaygroundView } from '../views/Playground/Playground'
import { SApp } from './App.styled'
import './fonts.css'

const history = createBrowserHistory()

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SApp>
        <GlobalStyle />
        <FormResetStyle />
        <Wrapper>
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <PlaygroundView />
              </Route>
            </Switch>
          </Router>
        </Wrapper>
      </SApp>
    </ThemeProvider>
  )
}
