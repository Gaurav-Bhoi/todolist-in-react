import React from 'react'
import Home from './Screens/home'
import { Provider } from 'react-redux'
import STORE from './Redux/store'

export default function App() {
  return (
    <Provider store={STORE}>
      <Home />
    </Provider>
  )
}
