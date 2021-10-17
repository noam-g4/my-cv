import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

import { Context } from '../index'
import Layout from './Layout'
import Unicornometer from './Unicornometer'

export default function Do({ onSelect }) {
  const history = useHistory()
  const { what_can_i_do } = useContext(Context)

  const { unicornometer, story } = what_can_i_do

  return (
    <Layout title="What Can I Do?" onSelect={onSelect} location="what_can_i_do">
      <div className="d-flex">
        <Unicornometer list={unicornometer} style={{ width: 'fit-content' }} />
        <div className="w-50 ms-4">
          <h4>well{' >'}</h4>
          <span>{story}</span>
          <br />
          <Button
            className="mt-2"
            onClick={() => history.push('/what_have_i_done')}
          >
            Checkout <strong>What Have I Done</strong>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
