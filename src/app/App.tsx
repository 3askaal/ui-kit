import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { FormResetStyle, GlobalStyle, theme } from '@core'
import { MdxComponents } from '../config/mdx'
import { HomeView, GuidesView, ComponentsView } from '../views'
import { SApp } from './App.styled'
import './fonts.css'
import { SiteWrapper } from '../components'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <SApp>
        <GlobalStyle />
        <FormResetStyle />
        <BrowserRouter>
          <MDXProvider components={MdxComponents}>
            <SiteWrapper>
              <Switch>
                <Route exact path="/">
                  <HomeView />
                </Route>
                <Route exact path="/guides">
                  <GuidesView />
                </Route>
                <Route exact path="/components">
                  <ComponentsView />
                </Route>
              </Switch>
            </SiteWrapper>
          </MDXProvider>
        </BrowserRouter>
      </SApp>
    </ThemeProvider>
  )
}
