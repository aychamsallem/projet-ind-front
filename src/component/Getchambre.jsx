import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Dataimg/FormAdmin.css'
import { useEffect, useState } from 'react'


export default function Getchambre() {
  const [chambre, setchambre] = useState([])


    

    async function getData() {
      let res1 = await fetch('http://localhost:5000/api')
      let json = await res1.json()
      setchambre(json.data)
    }

      useEffect(() => { getData() }, [])
  return (
    <div>
 
{
          chambre.map((elem, index) =>  <Card className='card'>

 <Card.Header>Featured</Card.Header>
 <Card.Body>
   <Card.Title>Special title treatment</Card.Title>
   <Card.Text>
     With supporting text below as a natural lead-in to additional content.
   </Card.Text>
   <Button onClick={()=>{window.location.href='Edit'}}variant="primary">Edit</Button>
 </Card.Body>
</Card>


          )}
 
    </div>
  )
}
