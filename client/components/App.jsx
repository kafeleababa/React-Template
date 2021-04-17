import React from 'react'
import Header from './Header'
import Bio from './Bio'
import Home from './Home'
import { Route } from 'react-router'
const App = () => {
  return (
    <>
      <Header/>
      <Route path='/bio' component={Bio} />
      <Route exact path='/' component={Home}/>
    </>
  )
}

export default App
