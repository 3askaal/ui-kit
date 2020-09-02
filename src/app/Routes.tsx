import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeView, GuidesView, ComponentsView } from '@views'

export const Routes = () => {
  return (
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
  )
}
