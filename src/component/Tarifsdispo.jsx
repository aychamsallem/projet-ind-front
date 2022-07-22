import React from 'react'
import {  Table } from 'react-bootstrap'
import Boutton from './Boutton'

export default function tarifdispo() {



  // function GetReservation(){

  //   fetch('http://localhost:5000/reservation', {
  //     method: 'GET',
  //     body: JSON.stringify({
  //       "arriver": arriver,
  //       "depart": depart,
  //       "vue": vue,
  //       // "disponnibilité": disponnibilité ,
  //       "type_de_chambres": type_de_chambres,
  //       "nbrNights": nbrNights,
  
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  
  
  return (
    <div>




<p>Detais reservation</p>
  
    
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre de nuitée </th>
          <th>Nombre de personne </th>
          <th>Disponniblité</th>
          <th>Total</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}></td>
          <td></td>
        </tr>
      </tbody>
    </Table>

    <div onClick={()=>window.location.href='confirmation'}>

<Boutton  titre='confirmation'></Boutton>

    </div>
    </div>

  )
}

