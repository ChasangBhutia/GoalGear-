import React from 'react'
import "./NewlyAdded.css"
import AllProducts from '../../assets/AllProducts'
import ItemCard from '../ItemCard/ItemCard'

const NewlyAdded = () => {

    const newlyAdded = AllProducts.filter((item)=>item.newlyAdded)

  return (
    <div id="newlyAddedSection" className="newlyAdded p-5 text-center">
        <h1>Newly Added</h1>
        <section className="newlyAddedContainer d-grid gap-4 p-5">
            {newlyAdded.map((item,index)=>{
                return(
                    <ItemCard key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} itemId={item.id}/>
                )
            })}
        </section>
    </div>
  )
}

export default NewlyAdded