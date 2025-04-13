import React from 'react'
import { useParams } from 'react-router-dom'
import AllProducts from '../assets/AllProducts';

const Product = () => {

    const slugify = (str) =>
        str.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
        const { name } = useParams();

        const product = AllProducts.find(
            (p) => slugify(p.name) === name
        );


        return (
            <div>
                <img src={product.imgUrl} alt="" height={400}/>
                <h3>{product.name}</h3>
            </div>
        )
    }

    export default Product;