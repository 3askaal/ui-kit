import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { FormResetStyle, GlobalStyle, theme } from '@core'
import { MdxComponents } from '../config/mdx.config'
import { HomeView, GuidesView, ComponentsView } from '../views'
import { SApp } from './App.styled'
import './fonts.css'
import { SiteWrapper } from '../components'

export default () => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        breakpoints: ['320px', '420px', '640px', '768px', '1024px', '1440px'],
        rootFontSizes: ['8px', '12px', '14px', '16px'],
        fonts: {
          ...theme.fonts,
          logo: "'Kaushan Script', Helvetica, Arial, sans-serif",
        },
      }}
    >
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
