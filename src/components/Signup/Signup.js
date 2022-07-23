import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Signup = () => {
    const axios = require('axios')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [number, setNumber] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
    }
    const handleNumber = (e) => {
        setNumber(e.target.value)
    }


    const signUpHandaler = () => {
        let data = {
            name,
            email,
            password,
            gender,
            number,
            roll: 'admin',
            accountType: 'admin',
        }
        axios.post('https://clinic-managements.herokuapp.com/clinic/auth/create',data)
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
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handleName} type="text" placeholder="Name" />
                    </Col>
                </Form.Group>

                <Form.Group  as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handleEmail} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Gender
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handleGender} type="text" placeholder="Gender" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Number
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handleNumber} type="text" placeholder="Number" />
                    </Col>
                </Form.Group>

                <div className='text-center'>
                    <Button onClick={signUpHandaler} className='custom-btn text-white px-3 py-2  w-50'>Signup</Button>
               </div>
            </Form>
            <p className='text-center'>Already have accoun? <Link to='/signin'>Signin</Link></p>
        </div>
    );
};

export default Signup;