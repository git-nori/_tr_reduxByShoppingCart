import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addItem } from '../cart/cartSlice'

import { Container, Row, Col } from 'react-bootstrap'

const CartPage = () => {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="text-center">
        <Col sm="12">
          <h2>Cart Page</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage