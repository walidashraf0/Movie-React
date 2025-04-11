import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'

const MovieList = () => {
  return (
    <Row className='mt-3'>
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
    </Row>
  )
}

export default MovieList