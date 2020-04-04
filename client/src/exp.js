import React from "react"

const AppContext = React.createContext()
let baseUrl = 'http://localhost:8787'
const EXP = {
  AppContext,
  baseUrl,

}
export default EXP
