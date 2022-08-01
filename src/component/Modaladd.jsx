import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form,Button } from 'react-bootstrap'


export default function ModalEdit() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
    <>
      <Button variant="primary" onClick={handleShow}>
          ajouter une chambre
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

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
{/* <Boutton titre='Add'></Boutton> */}

</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

