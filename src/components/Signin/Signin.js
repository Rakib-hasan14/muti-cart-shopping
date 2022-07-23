import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Signin = () => {
    const axios = require('axios')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleEmail = (e) => {
        setEmail(e.target.value)
    }
    const HandlePassword = (e) => {
        setPassword(e.target.value)
    }
    const signInHandaler = () => {
        let login = {
            email,
            password
        }
        axios.post('https://clinic-managements.herokuapp.com/clinic/auth/sign-in',login)
        .then(res => {
            if(res.data.status === true){
                sessionStorage.setItem('isLogin', 'yes')
                console.log(res.data)
                window.location.replace('/')
            }
        })
    }

    return (
        <div className="bg-light w-50 mx-auto my-5 border rounded px-4">
            <h2 className='main-text text-center w-50 mx-auto mt-4 text-white rounded'>Electric Hut</h2>
            <Form  className='my-5'>

                <Form.Group  as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={HandleEmail} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={HandlePassword} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

               <div className='text-center'>
                <Button onClick={signInHandaler} className='custom-btn text-white px-3 py-2  w-50'>Signin</Button>
               </div>
            </Form>
            <p className='text-center '>Already have accoun? <Link to='/signup'>Signup</Link></p>
        </div>
    );
};

export default Signin;