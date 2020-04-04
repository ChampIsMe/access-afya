import React, {useEffect} from 'react'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {Chart} from 'react-chartjs-2'

import {chartjs} from './helpers'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './assets/scss/index.scss'
import Routes from './Routes'
import {useDispatch, useSelector} from 'react-redux'
import {useSnackbar} from 'notistack'
import Button from "@material-ui/core/Button"
import EXP from "./exp"
import API from "./api/v1/api"
import {appActions} from "./reduxActions"
import actionTypes from "./reduxActions/actions"

const browserHistory = createBrowserHistory()

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
})

function App() {
  let AppContext = EXP.AppContext
  const {enqueueSnackbar, closeSnackbar} = useSnackbar()
  // initSockets()
  const userInfo = useSelector(state => state.userInfo)

  const dispatch = useDispatch()
  useEffect(() => {
    API.io.initSockets()
  }, [])
  useEffect(() => {
    dispatch(appActions(actionTypes.UI_STATE_RESET, {}))
  }, [userInfo])

  const showSnackBar = (message, variant, actionText) => {
    enqueueSnackbar(message, {
      key: new Date().getTime() + Math.random(),
      variant: variant,
      action: key => (
        <Button onClick={() => closeSnackbar(key)}>{actionText ? actionText : 'Dismiss'}</Button>
      ),
    })
  }

  return (
    <AppContext.Provider value={{showSnackBar,browserHistory}}>
      <Router history={browserHistory}>
        <Routes/>
      </Router>
    </AppContext.Provider>
  )
}

export default App
