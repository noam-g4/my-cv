import React, { useContext } from 'react'
import { Container, Row, Nav, Button } from 'react-bootstrap'
import { TiExport } from 'react-icons/ti'
import { intervalToDuration, formatDuration } from 'date-fns'
import { useHistory } from 'react-router-dom'

import { Context } from '../index'

export default function Layout({ title, children, location }) {
  const data = useContext(Context)
  const history = useHistory()
  const { profile } = data

  const duration = intervalToDuration({
    start: new Date(profile.birthday),
    end: new Date(),
  })

  return (
    <Container fluid>
      <Row className="bg-dark py-1">
        <Nav>
          {Object.keys(data)
            .filter(x => x !== 'profile')
            .map(key => (
              <Nav.Item key={key}>
                <Nav.Link
                  className={`text-capitalize nav ${
                    key === location && 'active'
                  }`}
                  onClick={() => history.push(`/${key}`)}
                >
                  {key.split('_').join(' ')}
                </Nav.Link>
              </Nav.Item>
            ))}
          <Nav.Item>
            <Nav.Link
              className="text-capitalize nav"
              href={`mailto:${profile.email}`}
            >
              Contact Me
            </Nav.Link>
          </Nav.Item>

          {profile.meta.map(link => (
            <Nav.Item key={link.url}>
              <Nav.Link href={link.url} target="_blank">
                <img
                  alt={link.name}
                  src={link.icon}
                  style={{ width: '25px', borderRadius: '10%' }}
                />
              </Nav.Link>
            </Nav.Item>
          ))}

          <Button
            variant="secondary"
            className="ms-auto d-none d-sm-block"
            size="sm"
            style={{ width: 'fit-content' }}
          >
            <TiExport className="mb-1 me-1" />
            Export PDF
          </Button>
        </Nav>
      </Row>
      <Row className="bg-primary p-3">
        <div className="d-flex flex-column align-items-center">
          <img
            alt={profile.name}
            src={profile.picture}
            style={{ width: '75px', borderRadius: '50%' }}
          />
          <h1 className="text-light display-6">{profile.name}</h1>

          <h5 className="text-light" style={{ fontWeight: '100' }}>
            {profile.caption}
          </h5>
          <span className="text-light" style={{ opacity: 0.7 }}>
            {'> '}
            {formatDuration(duration, {
              format: ['years', 'months', 'days'],
            })}{' '}
            old, currently from {profile.home}
          </span>
        </div>
      </Row>
      <div>
        <h1 className="display-5 text-secondary py-3" style={{ zoom: 0.6 }}>
          # {title}
        </h1>
        {children}
      </div>
    </Container>
  )
}
