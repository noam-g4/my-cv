import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsEnvelope } from 'react-icons/bs'
import { Context } from '..'

import Layout from './Layout'

export default function Learned({ onSelect }) {
  const { where_did_i_studied, profile } = useContext(Context)
  const { story } = where_did_i_studied

  return (
    <Layout
      title="Where Did I Studied?"
      onSelect={onSelect}
      location="where_did_i_studied"
    >
      <div className="d-flex">
        <div style={{ width: '75%', maxHeight: '52vh', overflowY: 'scroll' }}>
          <span>{story}</span>
        </div>
        <div
          className="d-flex align-items-start justify-content-center"
          style={{ width: '25%' }}
        >
          <Button size="lg" href={`mailto:${profile.email}`}>
            <BsEnvelope className="mb-1 me-1" />
            Send me an email
          </Button>
        </div>
      </div>
    </Layout>
  )
}
