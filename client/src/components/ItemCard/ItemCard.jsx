import React from 'react'
import "./ItemCard.css"

const ItemCard = (props) => {
    return (
        <section className="card" style={{width: "18rem"}}>
            <img src={props.imgUrl} className="card-img-top" alt="..."  height="300px" />
            <div className="card-body">
                <h5 className="card-title fs-6">{props.name}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </section>

    )
}

export default ItemCard 