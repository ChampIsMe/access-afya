import axios from "axios"
import store from "../../store"
import socketIOClient from "socket.io-client"
import EXP from "../../exp"
import actionTypes from "../../reduxActions/actions"
import {appActions} from "../../reduxActions"

let userInfo
let access_token
let uniqueID
let dispatch

function listener() {
  let state = store.getState()
  /*userInfo = state.userInfo || null
  access_token = userInfo && 'Bearer ' + userInfo.access_token
  uniqueID = userInfo.unik*/
}

dispatch = store.dispatch
store.subscribe(listener)

let baseAPI = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? 'localhost:8787' : '/'
  baseURL: EXP.baseUrl
})
//--------------------------------------------IO---------------------------------------------------
let  usersSocket, actionsSocket

//[START-USERS]
const createUser = (object) => {
  usersSocket.emit('userAction', object)
}
const handleUserCreationResponse = (response) => {
  console.log('RESPONSE' + JSON.stringify(response))

}
const handleNewUser = (response) => {
  baseAPI.get('/apiV1/users/read_one', {params: {email: response, access_token, uniqueID}}).then(value => {
    if (value.data === 'none') {
      return
    }
    dispatch({type: actionTypes.NEW_USER, payload: value.data})
  }).catch(reason => {
    console.log(reason)
  })
}
const handleUserUpdate = (email) => {
  baseAPI.get('/apiV1/users/read_one', {params: {email: email, access_token, uniqueID}}).then(value => {
    if (value.data === 'none') {
      return
    }
    if (email === userInfo.email) {
      dispatch(appActions(actionTypes.USER_INFO, value.data))
    }
    dispatch({type: actionTypes.USER_UPDATED, payload: value.data})
  }).catch(reason => {
    console.log(reason)
  })
}
const handleUserTrash = (response) => {
  dispatch({type: actionTypes.USER_TRASHED, payload: response})
}
//[END-USERS]
const API = {
  fileOperation: {
    uploadAsBase64: (obj) => {
      return baseAPI.post('/base64Upload', {...obj, access_token, uniqueID})
    },
  },
  users: {
    update: (obj) => {
      return baseAPI.post('/apiV1/users/update', {...obj, access_token, uniqueID,})
    },
    moveToTrash: (obj) => {
      return baseAPI.post('/apiV1/users/trash', {...obj, access_token, uniqueID,})
    },
    create: (obj) => {
      return baseAPI.post('/apiV1/users/new', {...obj, access_token, uniqueID,})
    },
    login: (obj) => {
      return baseAPI.post('/apiV1/users/login', {...obj, access_token, uniqueID,})
    },
    resetPassword: () => {
      return baseAPI.post('/apiV1/users/p_reset', {access_token, uniqueID,})
    },
    logout: () => {
      return baseAPI.post('/apiV1/users/logout', {access_token, uniqueID,})
    },
  },
  io: {
    initSockets: () => {
      if (!actionsSocket) {
        actionsSocket = socketIOClient(EXP.baseUrl)
        actionsSocket.on('newUser', (response) => {
          handleNewUser(response)
        })
        actionsSocket.on('userUpdate', (response) => {
          handleUserUpdate(response)
        })
        actionsSocket.on('userTrashed', (response) => {
          handleUserTrash(response)
        })

        actionsSocket.on('connect', (col) => {
          console.log('Actions channel connected successfully')
        })
      }


      if (!usersSocket) {
        usersSocket = socketIOClient(EXP.baseUrl + '/users')
        //todo get object from User creation component
        createUser({name: 'Philip', id: '123'})

        usersSocket.on('userActionResponse', (response) => {
          handleUserCreationResponse(response)
        })

        usersSocket.on('connect', (col) => {
          console.log('Users channel connected successfully')
        })
      }
    }
  }
}
export default API
