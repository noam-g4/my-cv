import React from 'react'

import Layout from './Layout'

export default function Learned({ onSelect }) {
  return (
    <Layout
      title="Where Did I Studied?"
      onSelect={onSelect}
      location="where_did_i_studied"
    />
  )
}
