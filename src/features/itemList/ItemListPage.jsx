import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addItem } from '../cart/cartSlice'

import { Container, Row, Col } from 'react-bootstrap'

import ItemCards from './ItemCards'

const ItemListPage = () => {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const handleAddItem = (id) => {
    // dispatch(addItem(id))
    console.log(id)
  }

  return (
    <Container>
      <Row className="text-center">
        <Col sm="12">
          <h2>Our Items</h2>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <ItemCards items={items} addItem={handleAddItem} />
        </Col>
      </Row>
    </Container>
  )
}

export default ItemListPage