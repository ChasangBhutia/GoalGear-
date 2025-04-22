import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../assets/AllProducts';
import Navbar from "../components/Navbar/Navbar"
import { useCart } from '../context/CartContext';
import "./Product.css"
import ProductsDetail from '../components/ProductDetail/ProductsDetail';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Product = () => {

    const { name } = useParams();
    const [itemQuantity, setItemQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const { addToCart } = useCart();

    const slugify = (str) =>
        str.toLowerCase().trim().replace(/[\s\W-]+/g, '-');

    const product = AllProducts.find(
        (p) => slugify(p.name) === name
    );

    const sizes = product.category === 'boots' ?
        ['34', '35', '36', '37', '38', '39', '40', '41', '42'] :
        ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    function handleAddToCartClick() {
        if (itemQuantity < 1 || selectedSize === "") {
            alert("You must select the size and the quantity must be greater or equal to 1");
        } else {
            addToCart(product, selectedSize, itemQuantity);
            setAddedToCart(true)
            setTimeout(() => {
                setAddedToCart(false);
            }, 2000)
        }
    }


    function decreaseQuantity() {
        setItemQuantity(itemQuantity - 1);
    }
    function increaseQuantity() {
        setItemQuantity(itemQuantity + 1);
    }
    function handleSizeClick(e) {
        if (e.target.tagName === 'BUTTON') {
            setSelectedSize(e.target.value);
        }
    }
    const hrStyle = {
        width:"200px",
        margin:"auto",
        border:"none",
        borderBottom:"3px solid black",
        marginBottom:"10px"
      }


    return (
        <div className='product d-flex flex-column gap-4'>
            <Navbar/>
            <Breadcrumbs product={product}/>
            <ProductsDetail
                sizes={sizes}
                product={product}
                handleSizeClick={handleSizeClick}
                selectedSize={selectedSize}
                handleAddToCartClick={handleAddToCartClick}
                addedToCart={addedToCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                itemQuantity={itemQuantity}
            />
            <hr style={hrStyle}/>
            <SimilarProducts product={product}/>
            <hr style={hrStyle}/>
            <Reviews />
            <hr style={hrStyle}/>
            <Footer/>
        </div>
    )
}

export default Product;