import React, { useEffect, createContext, useState } from 'react'
import './scss/index.scss'
import reactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from 'react-router-dom'

import Know from './components/Know'
import Do from './components/Do'
import Done from './components/Done'
import Learned from './components/Learned'

export const Context = createContext()

function Main() {
  const [resume, setResume] = useState(false)

  const route = window.location.pathname

  const Section = () => {
    switch (route) {
      case '/what_can_i_do':
        return <Do />
      case '/what_have_i_done':
        return <Done />
      case '/where_did_i_studied':
        return <Learned />
      default:
        return <Know />
    }
  }

  useEffect(() => {
    fetch('./assets/resume.json')
      .then(res => res.json())
      .then(data => setResume(data))
  }, [])

  if (!resume) return null

  return (
    <Router>
      <Context.Provider value={resume}>
        <Switch>
          <Section />
          <Redirect to="/" />
        </Switch>
      </Context.Provider>
    </Router>
  )
}

reactDOM.render(<Main />, document.querySelector('#root'))
