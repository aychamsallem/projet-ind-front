import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import img from '../img/logotrandy.webp'


export default function Header() {
  return (
    <div>

<div>
{/* <p>Any question ? call us :53 53 53 53</p> */}


<Navbar bg="light" variant="light">
{/* <img style={{width:"10%" , height:"5%"}} src ={img} />  */}

    <Container>
    <Navbar.Brand href="/">Acceuil</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Chambres&prix">Chambres&Prix</Nav.Link>
      <Nav.Link href="/hotel"></Nav.Link>
      <Nav.Link href="/laregion">La region</Nav.Link>
      <Nav.Link href="/contact">Contat</Nav.Link>
      <Nav.Link href="/reservation">Reservation</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>




    </Nav>
    </Container>
  </Navbar>

    </div>




    </div>
  )
}
