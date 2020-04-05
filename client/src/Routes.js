import React from 'react'
import {Redirect, Switch} from 'react-router-dom'

import {RouteWithLayout} from './components'
import {Main as MainLayout, Minimal as MinimalLayout} from './layouts'

import {NotFound as NotFoundView, Stations as StationsView} from './views'
import {useSelector} from "react-redux"

const Routes = () => {
  const userInfo = useSelector(state => state.userInfo)
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to={"/analytics"}
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/reports"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/comm"
      />
      <RouteWithLayout
        component={StationsView}
        exact
        layout={MainLayout}
        path="/analytics"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/reports"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found"/>
    </Switch>
  )
}

export default Routes
