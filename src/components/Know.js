import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { Context } from '../'
import Layout from './Layout'
import Unicornometer from './Unicornometer'

export default function Know({ onSelect }) {
  const { what_do_i_know } = useContext(Context)
  const history = useHistory()
  const { unicornometer, story } = what_do_i_know

  return (
    <Layout
      title="What Do I Know?"
      onSelect={onSelect}
      location="what_do_i_know"
    >
      <div className="d-flex">
        <Unicornometer list={unicornometer} style={{ width: 'fit-content' }} />
        <div className="w-50 ms-4">
          <h4>a few words{' >'}</h4>
          <span>{story}</span>
          <br />
          <Button
            className="mt-2"
            onClick={() => history.push('/what_can_i_do')}
          >
            Checkout <strong>What Can I Do</strong>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
