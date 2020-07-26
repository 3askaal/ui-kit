import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import { Wrapper, FormResetStyle, GlobalStyle, theme } from '@core'
import { PlaygroundView } from '../views/Playground/Playground'
import { SApp } from './App.styled'
import './fonts.css'
import { Sidebar } from '../components'

const history = createBrowserHistory()

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <SApp>
        <GlobalStyle />
        <FormResetStyle />
        <Router history={history}>
          <Sidebar />
          <Wrapper>
            <Switch>
              <Route exact path="/getting-started">
                <PlaygroundView />
              </Route>
              <Route exact path="/components">
                <PlaygroundView />
              </Route>
            </Switch>
          </Wrapper>
        </Router>
      </SApp>
    </ThemeProvider>
  )
}
