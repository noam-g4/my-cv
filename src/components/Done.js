import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { format, formatDistanceStrict } from 'date-fns'
import { useHistory } from 'react-router'

import { Context } from '../index'
import Layout from './Layout'

const Company = ({ data }) => {
  return (
    <div className="d-flex flex-column my-4">
      <div className="d-flex">
        <img src={data.icon} height="25" width="25" alt={data.company} />
        <a
          href={data.website}
          style={{ textDecoration: 'none' }}
          className="text-dark"
          target="_blank"
        >
          <h5 className="ms-2">{data.company}</h5>
        </a>
      </div>
      <small className="text-muted mb-2">{data.description}</small>
      <ul>
        {data.timeline.map(job => (
          <li key={`${job.role}-${data.company}`}>
            <div className="d-flex flex-column mb-3">
              <span>{job.role}</span>
              <small className="text-muted">
                {format(new Date(job.from), 'MMMM yyyy')}-
                {job.to === 'present'
                  ? job.to
                  : format(new Date(job.to), 'MMMM yyyy')}
              </small>
              <small className="text-muted" style={{ zoom: 0.8 }}>
                {formatDistanceStrict(
                  new Date(job.from),
                  job.to === 'present' ? new Date() : new Date(job.to)
                )}
              </small>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
}

export default function Done({ onSelect }) {
  const { what_have_i_done } = useContext(Context)
  const { jobs, story } = what_have_i_done
  const history = useHistory()

  return (
    <Layout
      title="What Have I Done?"
      onSelect={onSelect}
      location="what_have_i_done"
    >
      <div className="d-flex">
        <div
          className="d-flex flex-column bg-white rounded p-3 shadow-sm me-3"
          style={{
            maxHeight: '50vh',
            overflowY: 'scroll',
            minWidth: '40vw',
          }}
        >
          <h5 className="text-muted border-bottom">timeline{' >'}</h5>
          {jobs.map(company => (
            <Company key={company.company} data={company} />
          ))}
        </div>
        <div
          style={{
            maxHeight: '50vh',
            overflowY: 'scroll',
          }}
        >
          <h4>some history{' >'}</h4>
          <span>{story}</span>
          <br />
          <Button
            className="mt-4"
            onClick={() => history.push('/my-cv/where_did_i_studied')}
          >
            Checkout <strong>Where Did I Studied</strong>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
