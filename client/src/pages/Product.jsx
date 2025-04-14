import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../assets/AllProducts';
import Navbar from "../components/Navbar/Navbar"
import { useCart } from '../context/CartContext';
import "./Product.css"

const Product = () => {

    const [itemQuantity, setItemQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const { addToCart } = useCart();

    const slugify = (str) =>
        str.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    const { name } = useParams();

    const product = AllProducts.find(
        (p) => slugify(p.name) === name
    );
    function handleClick() {
        addToCart(product, selectedSize, itemQuantity);
        setAddedToCart(true)
        setTimeout(() => {
            setAddedToCart(false);
        }, 2000)
    }
    function decreaseQuantity() {
        setItemQuantity(itemQuantity - 1);
    }
    function increaseQuantity() {
        setItemQuantity(itemQuantity + 1);
    }
    function handleSizeClick(e){
        if(e.target.tagName === 'BUTTON'){
           setSelectedSize(e.target.value);
        }
    }

    return (
        <div className='product'>
            <Navbar />
            <span className='breadCrumbs'>HOME / {product.category} / {product.name}</span>
            <div className='d-flex container gap-5'>
                <div className="imgSection d-flex gap-3">
                    <section className='subImg d-flex flex-column gap-3 justify-content-center'>
                        <img loading='lazy' src={product.imgUrl} alt="" height={100} width={70} />
                        <img loading='lazy' src={product.imgUrl} alt="" height={100} width={70} />
                        <img loading='lazy' src={product.imgUrl} alt="" height={100} width={70} />
                        <img loading='lazy' src={product.imgUrl} alt="" height={100} width={70} />
                    </section>
                    <img loading='lazy' src={product.imgUrl} alt="" height={500} width={500} />
                </div>
                <div className="productDetails d-flex flex-column">
                    <h1>{product.name}</h1>
                    <span>Price: ₹{product.price}</span>
                    <span>Ratings: {product.ratings}({product.reviews})</span>
                    <h4>Sizes:</h4>
                    {product.category === 'boots' ? <section onClick={handleSizeClick} className='sizes d-flex gap-2'>
                        <button className='p-3' value="32">32</button>
                        <button className='p-3' value="33">33</button>
                        <button className='p-3' value="34">34</button>
                        <button className='p-3' value="35">35</button>
                        <button className='p-3' value="36">36</button>
                        <button className='p-3' value="37">37</button>
                        <button className='p-3' value="38">38</button>
                        <button className='p-3' value="39">39</button>
                        <button className='p-3' value="40">40</button>
                        <button className='p-3' value="41">41</button>
                    </section> :
                        <section onClick={handleSizeClick} className='sizes d-flex gap-2'>
                            <button className='p-3' value="XS">XS</button>
                            <button className='p-3' value="S">S</button>
                            <button className='p-3' value="M">M</button>
                            <button className='p-3' value="L">L</button>
                            <button className='p-3' value="XL">XL</button>
                            <button className='p-3' value="XXL">XXL</button>
                        </section>}

                    <section className="quantity mt-3">
                        <h4>Quantity:</h4>
                        <button className='p-1 fs-4 mx-1' onClick={decreaseQuantity}>-</button>
                        <button className='p-1 fs-4 mx-1'>{itemQuantity}</button>
                        <button className='p-1 fs-4 mx-1' onClick={increaseQuantity}>+</button>
                    </section>
                    <button className={addedToCart ? 'btn btn-success mt-3' : 'btn btn-danger mt-3'} onClick={handleClick}>{addedToCart ? "Successfully Added!" : "Add to Cart"}</button>
                </div>
            </div>
        </div>
    )
}

export default Product;