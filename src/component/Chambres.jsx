// import React from 'react'
// // import Card from 'react-bootstrap/Card';
// // import Form from 'react-bootstrap/Form';
// // import Button from 'react-bootstrap/Button';
import img1 from '../Dataimg/images.jpeg'
 import img2 from '../Dataimg/img2.jpeg'
import img3 from '../Dataimg/img3.jpeg'
import img4 from '../Dataimg/img4.jpg'
 import img5 from '../Dataimg/img5.jpeg'
 import img6 from '../Dataimg/img6.jpg'
 import img7 from '../Dataimg/img7.jpg'
 import img8 from '../Dataimg/img8.jpg'
 import img9 from '../Dataimg/img9.jpg'
 import img10 from '../Dataimg/img10.jpg'
 import img11 from '../Dataimg/img11.jpg'
 import img12 from '../Dataimg/img12.jpg'
 import img13 from '../Dataimg/img13.jpeg'
 import img14 from '../Dataimg/img14.jpg'
import img15 from '../Dataimg/img15.jpeg'
import img16 from '../Dataimg/img16.jpg'
 import { Container, Row ,Col, Button} from 'react-bootstrap'
import '../Dataimg/Data.css'
import Boutton from './Boutton'




 export default function Chambres() {
  return (

   <div>

<Container>
      <Row className='imgs'>
        <Col>

        <div className='imgcont'>
  <img className='img1' src={img1}></img> 
        </div>

        <div className='imgcont'>
  <img id='myImg ' className='img' src={img2}></img> 
  </div>


  <div className='imgcont'>
  <img id='myImg ' className='img'src={img15}></img> 
  </div>


  <div className='imgcont'>
  <img id='myImg' className='img'src={img15}></img> 
  </div>

</Col>
<Col xs={6}>
<div className='imgcont'>
  <img  className='img' src={img3}></img> 
  </div>

  <div className='imgcont'>
 <img id='myImg' className='img' src={img4}></img> 
 </div>

   </Col>
      <Col>
      <div className='imgcont'>
      <img className='img' src={img5}></img> 
      </div>



      <div className='imgcont'>
   <img id='myImg' className='img' src={img6}></img> 
   </div>

   <div className='imgcont'>
  <img id='myImg' className='img'src={img15}></img> 
  </div>


  <div className='imgcont'>
  <img id='myImg' className='img'src={img15}></img> 
  </div>


 </Col>
      </Row>
      <Row>       <Col>

      <div className='imgcont'>
      <img className='img' src={img8}></img> 
      </div>

      <div className='imgcont'>
       <img className='img'src={img15}></img> 
       </div>

       <div className='imgcont'>
 <img id='myImg' className='img' src={img8}></img> 
 </div>

 <div className='imgcont'>
 <img id='myImg' className='img'src={img15}></img> 
 </div>

 </Col>
        <Col xs={5}>
        <div className='imgcont'>
          <img className='img' src={img9}></img> 
          </div>

          <div className='imgcont'>
 <img id='myImg'className='img'src={img10}></img> 
 </div>

 <div className='imgcont'>
 <img id='myImg' className='img'src={img15}></img> 
 </div>


 </Col>
       <Col>
       
       <div className='imgcont'>
       <img className='img'src={img11}></img> 
       </div>

       <div className='imgcont'>
        <img className='img'src={img15}></img> 
        </div>


        <div className='imgcont'>
 <img id='myImg'className='img'src={img12}></img> 
 </div>

 <div className='imgcont'>
 <img id='myImg' className='img'src={img15}></img> 
 </div>


 </Col>
     </Row>
    </Container>


   {/* <div  className='row' style={{marginRight:'20px'}}> */}
      {/* <Button onClick={()=>window.location.href='Reservation'} variant="primary" size="lg" className='col-lg-3 offset-lg-9' >
Reservez maintenant 
      </Button></div>
       */}
  

<div  onClick={()=>window.location.href='tarifs'}>

<Boutton titre='disponnibilté'></Boutton>
</div>


</div>


 )
 }

      



   
  
