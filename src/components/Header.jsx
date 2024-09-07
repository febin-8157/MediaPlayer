import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar className="bg-info">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}>
           
            <Navbar.Brand style={{color:'white'}} className='fs-5 fw-bolder' >
            <i class="fa-solid fa-music"></i>
             Media Player
            </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
  )
}

export default Header
