import React from 'react'
import "./ItemCard.css"
import { Link } from 'react-router-dom'

const ItemCard = (props) => {

    function createSlug(name) {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    return (
        <section className='itemCard text-start d-flex flex-column'>
            <Link to={`/product/${createSlug(props.name)}/`} style={{ textDecoration: "none", color: "black" }}>
                <img className='mb-2' src={props.imgUrl} loading="lazy" alt={props.name} />
                <h3 className='fs-5'>{props.name}</h3>
                <p className='price fs-5'>Price: ₹{props.price}</p>
            </Link>

        </section>
    )
}

export default ItemCard 