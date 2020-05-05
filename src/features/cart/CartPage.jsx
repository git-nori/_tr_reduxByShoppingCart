import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addItem, removeItem } from '../cart/cartSlice'

import { Container, Row, Col } from 'react-bootstrap'

import CartCards from './CartCards'

const CartPage = () => {
  const total = useSelector(state => state.cart.total)
  const items = useSelector(state => state.cart.addedItems)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="text-center mb-3">
        <Col sm="12">
          <h2>Cart Page</h2>
        </Col>
      </Row>
      <Row className="text-center mb-3">
        <Col sm="12">
          <h3>Total Prce: ${total}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <CartCards
            items={items}
            removeItem={id => { dispatch(removeItem(id)) }}
            addItem={(id, cnt) => { dispatch(addItem({id, cnt})) }} />
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage