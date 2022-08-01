import React from 'react'
import { Form,Button } from 'react-bootstrap'
import '../Dataimg/FormAdmin.css'
import Modaladd from './Modaladd'
import Boutton from './Boutton'
import { useState } from 'react';
import Getchambre from './Getchambre';


export default function AdminAdd() {



  const [type,settype]=useState('')
  const [prix, setprix]=useState('')
  const [dispo , setdispo]=useState ('')
  const [img, setimg]=useState('')
  
  
  
  function Add(){
  
    fetch('http://localhost:5000/chambre', {
      method: 'POST',
      body: JSON.stringify({
        "type": type,
        "prix": prix,
        "dispo": dispo,
        "img": img,

  
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }

  return (


    <div className='forms'>
     <Modaladd />
    {/* <p className='titre'>Add chambre</p>

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

      <Button onClick={()=> {Add()}} variant="primary">Add</Button>
<Boutton titre='Add'></Boutton>
     
      </div>

<Getchambre></Getchambre> */}
      </div>



  )
}

