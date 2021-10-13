import React, { useContext } from 'react'
import { ProgressBar, Button } from 'react-bootstrap'
import { GiUnicorn } from 'react-icons/gi'

import { Context } from '../index'
import Layout from './Layout'
import Unicornometer from './Unicornometer'

export default function Do({ onSelect }) {
  const { what_can_i_do } = useContext(Context)

  const { unicornometer } = what_can_i_do

  return (
    <Layout title="What Can I Do?" onSelect={onSelect}>
      <div>
        <Unicornometer list={unicornometer} style={{ width: 'fit-content' }} />
      </div>
    </Layout>
  )
}
