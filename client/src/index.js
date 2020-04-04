import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import store from "./store"
import {Provider} from 'react-redux'
import {SnackbarProvider} from 'notistack'
import {ThemeProvider} from "@material-ui/styles"
import theme from "./theme"

let persistor = persistStore(store)
ReactDOM.hydrate(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <App/>
      </SnackbarProvider>
    </ThemeProvider>
  </PersistGate>
</Provider>, document.getElementById('root'))

serviceWorker.unregister()
