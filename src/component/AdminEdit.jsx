import React from 'react'
import {  Form } from 'react-bootstrap'
import '../Dataimg/FormAdmin.css'
import Boutton from './Boutton'


export default function AdminEdit() {
  return (
    <div className='edit'>
<p className='titre'>Edit </p>

<Form.Group className="mb-3">
        <p className='input'>Type</p>
        <Form.Label></Form.Label>
        <Form.Control disabled />
      </Form.Group>


      <Form.Group className="mb-3">
        <p className='input'>Prix</p>
        <Form.Label></Form.Label>
        <Form.Control  disabled />
      </Form.Group>


      <p className='input'>Disponibilité</p>
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Select disabled>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <p className='input'>image</p>
        <Form.Label></Form.Label>
        <Form.Control disabled/>
      </Form.Group>


      {/* <Button type="submit">Add</Button> */}

<Boutton titre='Edit'></Boutton>
    </div>
  )
}

