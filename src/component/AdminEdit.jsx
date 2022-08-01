import React from 'react'
import {  Button, Form } from 'react-bootstrap'
import '../Dataimg/FormAdmin.css'
// import Boutton from './Boutton'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ModalEdit from './ModalEdit';

export default function AdminEdit() {
  const [type,settype]=useState('')
  const [prix, setprix]=useState('')
  const [dispo , setdispo]=useState ('')
  const [img, setimg]=useState('')
  const location = useParams()


  async function AdminEdit() {
      console.log("test")
      // let res2 = await 
      fetch('http://localhost:5000/chambre')
      // let json = await res2.json()
 
    // setMyselectartic(json)
    // setLoad(true)
    }

  async function AdminEdit(e) {
   e.preventDefault()
     console.log('test')
     let chambre={
        type:type,
        prix:prix,
       dispo:dispo,
      img: img,
    }
    let obj={
       method: 'POST',
       body: JSON.stringify(chambre),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
         }
     }
         fetch('http://localhost:5000/chambre'+location.id, obj)
      .then((response) => response.json())
    .then((json) => console.log(json));
      window.location.href="/Home"
      
  

  }






return(




<div className='forms'>
    <p className='titre'>Edit</p>

<div className='add' >

      <Form.Group className="mb-3">
        <p className='input'>Type</p>
        <Form.Label></Form.Label>
        <Form.Control onChange={(e)=>settype(e.target.value)}  />
      </Form.Group>


      <Form.Group className="mb-3">
        <p className='input'>Prix</p>
        <Form.Label></Form.Label>
        <Form.Control onChange={(e)=>setprix(e.target.value)}  />
      </Form.Group>


      <p className='input'>Disponibilité</p>
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
     
        <Form.Select onChange={(e)=>setdispo(e.target.value)}>
        <option>disponible</option>
        <option>non disponible</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <p className='input'>image</p>
        <Form.Label></Form.Label>
        <Form.Control onChange={(e)=>setimg(e.target.value)}/>
      </Form.Group>

      <Button  variant="primary">Edit</Button>
      <ModalEdit />

     
      </div>

      </div> 

)}

