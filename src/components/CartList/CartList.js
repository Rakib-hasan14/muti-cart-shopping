import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DELETE } from '../Redux/Action/Action'

const CartList = (props) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const getCartData = useSelector((state)=> state.cartReducer.cart)


  const handleDelete = (id) => {
    dispatch(DELETE(id))
  }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >

                <Modal.Header className='text-center'>
                    <Modal.Title id="contained-modal-title-vcenter ">
                    Cart List
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        getCartData.map(item => <div className='row border rounded py-3 d-flex align-items-center my-4'>
                        <div className='col-1'>
                            <h6>{item.name}</h6>
                        </div>
                        <div className='col-3'>
                            <img className='h-100 w-100' src={item.picture} alt="" />
                        </div>
                        <div className='col-2'>
                            <h6>Quantity: {item.quantity}</h6>
                        </div>
                        <div className='col-2'>
                            <h6>Color: {item.color}</h6>
                        </div>
                        <div className='col-2'>
                            <h6>Ram: {item.ram} GB</h6>
                        </div>
                        <div className='col-2 text-center'>
                            <h6>{item.total} BDT</h6>
                        </div>
                        <div className='col-12 text-end'>
                            <button onClick={()=> handleDelete(item.id)} className=" me-4 btn btn-danger" href="/">Remove</button>
                        </div>
                    </div>
                    )
                    }
                    

                    {
                        getCartData.length > 0 ? <div className='row  my-5'>
                        {/* <div className='col-md-6 text-center'> */}
                            {/* <div>
                                <h6>Sub Total: {getCartData[0].total} BDT</h6>
                                <h6>Delivery Charge: 99 BDT</h6>
                                <h6>Total: {getCartData[0].total + 99} BDT</h6>
                            </div>
                        // </div> */}
                        <div className='col-md-12 text-center'>
                            <button className='custom-btn w-50 py-3 rounded text-white f-bold'>Buy now</button>
                        </div>
                    </div> : <h2 className='text-danger text-center py-4'>Your cart is empty!</h2>
                    }
                </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CartList;