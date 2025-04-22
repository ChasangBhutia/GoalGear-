import React from 'react'
import AllProducts from '../../assets/AllProducts'
import ItemCard from '../ItemCard/ItemCard'

const SimilarProducts = ({ product }) => {

    let similarItems = AllProducts.filter(p => p.category === product.category && p.name !== product.name);


    const gridStyle = {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
    }

    return (
        <div className='p-5 pb-0'>
            <h2>Similar Products</h2>
            <section style={gridStyle} className="similarProductsContainer d-grid gap-4 p-5 pb-0">
                {similarItems.slice(0,8).map((item, index) => {
                    return (
                        <ItemCard key={index} name={item.name} imgUrl={item.imgUrl} price={item.price} />
                    )
                })}
            </section> 
        </div>
    )
}

export default SimilarProducts