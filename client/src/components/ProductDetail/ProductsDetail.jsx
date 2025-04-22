import React from 'react'

const ProductsDetail = (props) => {
  return (
    <div className='d-flex container mt-1 mb-5 gap-5'>
                    <div className="imgSection d-flex gap-3">
                        <section className='subImg d-flex flex-column gap-3 justify-content-center'>
                            <img loading='lazy' src={props.product.imgUrl} alt="" height={100} width={70} />
                            <img loading='lazy' src={props.product.imgUrl} alt="" height={100} width={70} />
                            <img loading='lazy' src={props.product.imgUrl} alt="" height={100} width={70} />
                            <img loading='lazy' src={props.product.imgUrl} alt="" height={100} width={70} />
                        </section>
                        <img loading='lazy' src={props.product.imgUrl} alt="" height={450} width={450} />
                    </div>
                    <div className="productDetails d-flex gap-2 flex-column">
                        <h1>{props.product.name}</h1>
                        <span>Price: ₹{props.product.price}</span>
                        <span>Ratings: {props.product.ratings}({props.product.reviews})</span>
                        <h4>Sizes:</h4>
                        <section onClick={props.handleSizeClick} className='sizes d-flex gap-2'>
                            {props.sizes.map((size, index) => {
                                return (<button key={index} className={`p-3 rounded btn ${props.selectedSize === size ? 'btn-secondary' : 'btn-outline-secondary'}`} value={size}>{size}</button>)
                            })}
                        </section>

                        <section className="quantity mt-3">
                            <h4>Quantity:</h4>
                            <button className='p-1 fs-4 mx-1' onClick={props.decreaseQuantity}>-</button>
                            <button className='p-1 fs-4 mx-1'>{props.itemQuantity}</button>
                            <button className='p-1 fs-4 mx-1' onClick={props.increaseQuantity}>+</button>
                        </section>
                        <button className={props.addedToCart ? 'btn btn-success mt-3' : 'btn btn-danger mt-3'} onClick={props.handleAddToCartClick}>{props.addedToCart ? "Successfully Added!" : "Add to Cart"}</button>
                    </div>
                </div>
  )
}

export default ProductsDetail