import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard';
import "./Section.css"
import AllProducts from '../../assets/AllProducts';

const Section = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(AllProducts.filter(p => p.category === props.category))
    }, [props.category])

    return (

        <div className='section text-center pt-5'>
            <h1 className='text-uppercase'>{props.category}</h1>
            <section className="itemContainer d-grid gap-5 p-5">
                {data.map((item, index) => {
                    return (
                        <ItemCard key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} itemId={item.id} />
                    )
                })}
            </section>
        </div>
    )
}

export default Section;