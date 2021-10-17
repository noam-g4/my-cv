import React, { createContext } from 'react'
import './scss/index.scss'
import data from './resume.json'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Know from './components/Know'
import Do from './components/Do'
import Done from './components/Done'
import Learned from './components/Learned'

export const Context = createContext()

function Main() {
  if (!data) return null

  return (
    <Router>
      <Context.Provider value={data}>
        <Switch>
          <Route path="/my-cv/what_can_i_do" component={Do} />
          <Route path="/my-cv/what_have_i_done" component={Done} />
          <Route path="/my-cv/where_did_i_studied" component={Learned} />
          <Route path="/my-cv/" component={Know} />
        </Switch>
      </Context.Provider>
    </Router>
  )
}

reactDOM.render(<Main />, document.querySelector('#root'))
