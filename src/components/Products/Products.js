import React, { useState } from 'react';
import productData from './ProductData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState(productData)
console.log(data)
    return (
        <>
            <h1 className='text-center mt-5 mb-4'>Products</h1>
            <hr className='w-50 m-auto '/>
            <div className='container my-5'>
            <div className='row g-2'>
            {
                
                data.map(item => <div className='col-md-3'>
                    <Card>
                        <Card.Img style={{height: '250px'}} variant="top" src={item.primaryPic} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Price : {item.primaryPrice}</Card.Text>
                            <Card.Text>{item.isAvailable === true ? <p className='available'>Available</p> : <p className='unavailable'>Not Available</p>}</Card.Text>
                            <Link to={`/product/${item.id}`}> 
                                <Button className='w-100 custom-btn' variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                )
            }
            </div>
            </div>
        </>
    );
};

export default Products;