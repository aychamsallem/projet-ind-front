import React from 'react'
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap'


export default function Reservation() {

const [arriver,setarriver]=useState('')
const [depart, setdepart]=useState('')
const [vue , setvue]=useState ('')
const [type_de_chambres , settype_de_chambres]=useState('')
const [nbrNights ,setnbrNights]=useState('')
const [disponnibilité ,setdisponnibilité]=useState('')



function AddReservation(){

  fetch('http://localhost:5000/reservation', {
    method: 'POST',
    body: JSON.stringify({
      "arriver": arriver,
      "depart": depart,
      "vue": vue,
      // "disponnibilité": disponnibilité ,
      "type_de_chambres": type_de_chambres,
      "nbrNights": nbrNights,

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));




    // window.location.href='/Details'
      
  }



  return (
    <div>

<p>Aquelle periode souhaitez vous sejourner dans l'etablisement (x)?</p>



    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Arriver</Form.Label> 
        <Form.Control onChange={(e)=>setarriver(e.target.value)} type="date"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Depart</Form.Label>
        <Form.Control  onChange={(e)=>setdepart(e.target.value)}  type="date" placeholder="Password" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>nbrNights</Form.Label>
        <Form.Control  onChange={(e)=>setnbrNights(e.target.value)}    />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>disponnibilité</Form.Label>
        <Form.Control  onChange={(e)=>setdisponnibilité(e.target.value)}   />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>type_de_chambres </Form.Label>

        <Form.Control   onChange={(e)=>settype_de_chambres(e.target.value)}   type="text" placeholder="Nombre de personne" />





        <Form.Label>Vue</Form.Label>

    <Form.Select  onChange={(e)=>setvue(e.target.value)} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="mer">vue mer</option>
      <option value="piscine">vue piscine</option>
    </Form.Select>
  


      
      </Form.Group>


      
  
    </Form>
  
   
    <Button onClick={()=>{AddReservation()}} variant="primary" type="submit">
       poursuivre
      </Button>


    </div>
  )
  }
