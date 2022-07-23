import { queryAllByAltText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Products/ProductData';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/Action/Action';


const SingleProduct = () => {
    const { id } = useParams()


    const singleProduct = productData.find(product => product.id == id)
    const type = singleProduct.types

    const [quantity , setQuantity ] = useState(1)
    const [img , setImg ] = useState(type[0].picture)
    const [color , setColor ] = useState(type[0].color)
    const [ram , setRam ] = useState(type[0].differentData[0].ram)

    let variant = type.find(item => item?.color === color)
    let varianCamera = variant?.differentData.find(item => item.ram === ram || '');

    // useEffect((
    //      varianCamera = variant?.differentData.find(item => item.ram === ram)
    // ),[color])

    const dispatch = useDispatch()

    const addProductToCart = () => {
        const data = {
            id,
            name: singleProduct.name,
            color: color,
            picture: variant.picture,
            ram: ram,
            quantity: quantity,
            total: varianCamera.price * quantity,
        }
        dispatch(ADD(data))
    }

    return (
        <div className='secondary-bg h-100 py-5  z-1'>
        <div className='secondary-bg h-100 py-5 w-85 mx-auto'>
            <div className="w-75 mx-auto white-bg rounded border">
                <div className="row  container py-4 g-3">
                    <div className='col-2'>
                        {
                            type.map(item => <div className={item.picture === img && 'click-active'} onClick={() => setImg(item.picture)}>
                                <img className='w-100 h-100 my-3 px-2' src={item.picture} alt="" /> 
                            </div>
                            )
                        }
                    </div>
                    <div className='col-5 d-flex align-items-center'>
                        <img className='h-75 w-75' src={img} alt="" />
                    </div>
                    <div className='col-5'>
                        <h1>{singleProduct.name}</h1>
                        <h4 className='my-3'>BDT {varianCamera?.price*quantity}</h4>
                        
                        <h4>Color : {color}</h4>
                        <div className="d-flex mb-4">
                        {
                            type.map(item=> <div className={item.color === color && 'click-active'}>
                                <h6 onClick={()=> setColor(item.color)} className='mx-2  mt-2 px-2 py-1'>{item.color}</h6>
                            </div>)
                        }
                        </div>

                        <h5 className='my-2'>Ram : {ram}</h5>
                        <div className="d-flex">
                        {
                            variant.differentData.map(item=> <div className={item.ram === ram && 'click-active '} >
                                <h6 onClick={() => setRam(item?.ram)} className='mx-2  mt-2 px-2 py-1' >{item.ram}</h6>
                            </div>
                            )
                        }
                        </div>
                        <h5 className='my-4'>Camera : {varianCamera?.camera} mpx</h5>

                        <div className='row mt-4'>
                            <div className='col-md-6 d-flex align-items-center justify-content-center'>
                                <button onClick={()=> setQuantity(quantity > 1 ? quantity - 1 : quantity)} className='custom-btn customp-btn-p'><AiOutlineMinus /></button>
                                <span className='main-bg custom-p'>{quantity}</span>
                                <button onClick={()=> setQuantity(quantity + 1)} className='custom-btn customp-btn-p'><AiOutlinePlus /></button>
                            </div>
                            <div className='col-md-6'>
                                {singleProduct.isAvailable === true ? <button onClick={addProductToCart} className='custom-btn cart-btn text-white'>Add to cart <MdShoppingCart /></button> :
                                <button aria-disabled="true" className='btn-danger btn cart-btn text-white disabled'>Add to cart <MdShoppingCart /></button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SingleProduct;