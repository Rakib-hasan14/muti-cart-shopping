import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Header.css';
import { Link } from 'react-router-dom';
import CartList from '../CartList/CartList';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const getCartData = useSelector((state)=> state.cartReducer)
console.log(getCartData)
  const [modalShow, setModalShow] = React.useState(false)

  const get = sessionStorage.getItem('isLogin')
console.log(get)
  const logOutHandaler = e => {
    sessionStorage.removeItem('isLogin')
    window.location.reload()
  }


  return (
    <Navbar className='main-bg position-sticky top-0 w-100 z-100' expand="lg">
      <Container>
        <Navbar.Brand className='text-white text-bold'><h3><Link className='text-white text-decoration-none' to='/'>Electric hut</Link></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

            <div className='w-75'>
                <Form className="d-flex justify-content-end">
                <Form.Control
                type="search"
                placeholder="Search Products..."
                className="me-2 w-75"
                aria-label="Search"
                />
              <Button className='custom-btn'>Search</Button>
              </Form>  
            </div>

            {
              get === null ? <div className='account'>
              <Link className='text-decoration-none text-white' to='/signup'>Sign up /</Link>
              <Link className='text-decoration-none text-white' to='/signin'> Sign in</Link>
            </div> : <div className='account'><Link onClick={logOutHandaler} className='text-decoration-none text-white border p-2 rounded' to='/'>Log out</Link></div>
            }
              

            <div className='cart-style' onClick={() => setModalShow(true)}>
              <span className='cartIcon d-flex text-white' ><AiOutlineShoppingCart /></span><Badge className='cartBadge text-white' bg="secondary">{getCartData.cart.length}</Badge>

              
            </div>
            <CartList
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;