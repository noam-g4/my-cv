import React, { useEffect, createContext, useState } from 'react'
import './scss/index.scss'
import reactDOM from 'react-dom'

import Do from './components/Do'
import Know from './components/Know'
import Done from './components/Done'
import Learned from './components/Learned'

export const Context = createContext()

function Main() {
  const [resume, setResume] = useState(false)
  const [route, setRoute] = useState('what_do_i_know')

  useEffect(() => {
    fetch('./assets/resume.json')
      .then(res => res.json())
      .then(data => setResume(data))
  }, [])

  if (!resume) return null

  return (
    <Context.Provider value={resume}>
      {route === 'what_do_i_know' ? <Know onSelect={setRoute} /> : null}
      {route === 'what_can_i_do' ? <Do onSelect={setRoute} /> : null}
      {route === 'what_have_i_done' ? <Done onSelect={setRoute} /> : null}
      {route === 'where_did_i_learned' ? <Learned onSelect={setRoute} /> : null}
    </Context.Provider>
  )
}

reactDOM.render(<Main />, document.querySelector('#root'))
