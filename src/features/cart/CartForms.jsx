import React from 'react'

import { Button, Form } from 'react-bootstrap'
import { BsPlus, BsDash } from "react-icons/bs";

const CartForms = ({ item, addItem, removeItem }) => {

  const handleSubClick = () => {
    if(item.quantity > 0){
      addItem(item.id, -1)
    }
  }

  return (
    <Form inline>
      <Form.Group>
        <Form.Control value={item.quantity} onChange={()=>{addItem(item.id, null)}}></Form.Control>
      </Form.Group>
      <div className="mt-5">
        <Button variant="outline-info" onClick={()=>{addItem(item.id, null)}}><BsPlus /></Button>
        <Button className="ml-1" variant="outline-info" onClick={handleSubClick}><BsDash /></Button>
        <Button className="ml-2" variant="outline-danger" onClick={() => { removeItem(item.id) }}>Remove</Button>
      </div>
    </Form>
  )
}

export default CartForms