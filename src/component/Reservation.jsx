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

 function CalculDate(){

var arriv = new Date(arriver)
var dep = new Date(depart)
var Difference_In_Time = dep.getTime() - arriv.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
if ( isNaN(Difference_In_Days) || Difference_In_Days<0 ){
  return 'saisir une date valide'
}else {

  return Difference_In_Days
}
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
        <Form.Control  value={CalculDate()}  type="text"  />
     
      </Form.Group>

{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>disponnibilité</Form.Label>
        <Form.Control  onChange={(e)=>setdisponnibilité(e.target.value)}   />
      </Form.Group> */}


      






        <Form.Label>Vue</Form.Label>

    <Form.Select  onChange={(e)=>setvue(e.target.value)} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="mer">vue mer</option>
      <option value="piscine">vue piscine</option>
    </Form.Select>
  


      


      
  
    </Form>
  
   
    <Button onClick={()=>window.location.href='tarifdispo'} variant="primary" type="submit">
    tarifs&disponniblité </Button>


    </div>
  )
  }
