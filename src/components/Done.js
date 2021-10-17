import React from 'react'

import Layout from './Layout'

export default function Done({ onSelect }) {
  return (
    <Layout
      title="What Have I Done?"
      onSelect={onSelect}
      location="what_have_i_done"
    />
  )
}
