import React from 'react'

import CardForms from './CartForms'

import { Container, Row, Col, Image } from 'react-bootstrap'

const CartCards = ({ items, addItem, removeItem }) => {
  const renderCards = () => {
    return items.map(item => {
      return (
        <Container key={item.id}>
          <Row className="d-flex flex-row mb-3">
            <Col xs={7}>
              <Image src={item.img} className="mw-100" />
            </Col>
            <Col xs={5}>
              <h3>{item.title}</h3>
              <p>Per Price: ${item.price}</p>
              <CardForms item={item} addItem={addItem} removeItem={removeItem} />
            </Col>
          </Row>
        </Container>
      )
    })
  }

  return (
    <>
      {renderCards()}
    </>
  )
}

export default CartCards