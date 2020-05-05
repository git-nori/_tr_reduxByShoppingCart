import React, { useState } from 'react'

import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap'

import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

const ItemCards = ({ items, addItem }) => {
  const [show, setShow] = useState(false)
  const [addItemId, setAddItemId] = useState("")
  const [addItemCnt, setAddItemCnt] = useState(0)

  // モーダルを表示する
  const handleClick = (id) => {
    setAddItemId(id)
    setShow(true)
  }

  // モーダルの閉じるボタン押下時
  const handleCancel = () => {
    setShow(false)
    setAddItemCnt(0)
  }

  // モーダルのADDボタン押下時
  const handleOk = () => {
    if(addItemCnt > 0){
      addItem(addItemId, addItemCnt)
      setAddItemCnt(0)
      setShow(false)
    }
  }

  // モーダルのマイナスボタン押下時
  const handleSubClick = () => {
    if (addItemCnt > 0) {
      setAddItemCnt(addItemCnt - 1)
    }
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

  const renderPrice = () => {
    if (addItemId) {
      const item = items.find(item => item.id === addItemId)
      const totalPrice = item.price * addItemCnt
      return <p>${totalPrice}</p>
    }
  }

  const renderModal = () => {
    return (
      <Modal show={show} centered onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>ADD ITEM TO CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderPrice()}
          <Form inline>
            <Form.Group>
              <Form.Control value={addItemCnt} onChange={(e) => { setAddItemCnt(e.target.value) }}></Form.Control>
              <Button className="ml-3" variant="outline-info" onClick={() => { setAddItemCnt(addItemCnt + 1) }}><BsPlus /></Button>
              <Button className="ml-3" variant="outline-info" onClick={handleSubClick}><BsDash /></Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleOk}>ADD</Button>
          <Button variant="outline-secondary" onClick={handleCancel}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <Row>
      {renderCards()}
      {renderModal()}
    </Row>
  )
}

export default ItemCards