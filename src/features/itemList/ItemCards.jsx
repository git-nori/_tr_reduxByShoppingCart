import React from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'

import { BsPlus } from "react-icons/bs";

const ItemCards = ({ items, addItem }) => {
  const handleClick = (id) => {
    addItem(id)
  }

  const renderCards = () => {
    return items.map(item => {
      return (
        <Col sm="6" md="4" key={item.id}>
          <Card className="mb-3">
            <Card.Img variant="top" src={item.img}></Card.Img>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <Card.Text className="font-weight-bold">Price: ${item.price}</Card.Text>
              <div className="text-right">
                <Button variant="outline-info" size="md" onClick={() => { handleClick(item.id) }}><BsPlus /></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Row>
      {renderCards()}
    </Row>
  )
}

export default ItemCards