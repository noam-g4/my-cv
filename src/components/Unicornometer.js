import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { GiUnicorn } from 'react-icons/gi'

export default function Unicornometer({ list, style = {} }) {
  return (
    <div
      className="bg-dark p-3 rounded shadow"
      style={{
        maxHeight: '50vh',
        overflowY: 'scroll',
        ...style,
      }}
    >
      <h3 className="text-light">
        <GiUnicorn className="mb-2" />
        unicornometer
      </h3>
      {list.map(item => (
        <div key={item.subject} className="mt-2">
          <strong className="text-light" style={{ fontWeight: '500' }}>
            {item.subject}
          </strong>
          <ProgressBar
            style={{ width: '30vw' }}
            now={item.progress}
            label={`${item.progress}%`}
            variant={'success'}
          />
        </div>
      ))}
    </div>
  )
}
