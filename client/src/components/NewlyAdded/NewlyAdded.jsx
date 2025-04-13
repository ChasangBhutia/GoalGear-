import React from 'react'
import "./NewlyAdded.css"
import Socks from '../../assets/socks/Socks'
import ItemCard from '../ItemCard/ItemCard'

const NewlyAdded = () => {

    const newlyAdded = Socks.filter((item)=>item.newlyAdded)

  return (
    <div className='newlyAdded p-5 text-center'>
        <h1>Newly Added</h1>
        <section className="newlyAddedContainer d-flex flex-wrap gap-5 p-5">
            {newlyAdded.map((item,index)=>{
                return(
                    <ItemCard key={index} imgUrl={item.imgUrl} name={item.name}/>
                )
            })}
        </section>
    </div>
  )
}

export default NewlyAdded