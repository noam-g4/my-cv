import React, { createContext } from 'react'
import './scss/index.scss'
import data from './resume.json'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Know from './components/Know'
import Do from './components/Do'
import Done from './components/Done'
import Learned from './components/Learned'

export const Context = createContext()

function Main() {
  const route = window.location.pathname

  const Section = () => {
    switch (route) {
      case '/my-cv/what_can_i_do':
        return <Do />
      case '/my-cv/what_have_i_done':
        return <Done />
      case '/my-cv/where_did_i_studied':
        return <Learned />
      default:
        return <Know />
    }
  }

  if (!data) return null

  return (
    <Router>
      <Context.Provider value={data}>
        <Switch>
          <Section />
          <Redirect to="/" />
        </Switch>
      </Context.Provider>
    </Router>
  )
}

reactDOM.render(<Main />, document.querySelector('#root'))
