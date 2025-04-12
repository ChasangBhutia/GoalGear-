import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard';
import "./Section.css"
import Bags from '../../assets/bags/Bags';
import Gloves from '../../assets/gloves/Gloves';
import Jersey from '../../assets/jursey/Jersey';
import Guards from '../../assets/shinGuards/Guards';


const Section = (props) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        if(props.category === 'bags')setData(Bags);
        else if(props.category === 'gloves')setData(Gloves);
        else if(props.category === 'jersey')setData(Jersey);
        else if(props.category === 'boots')setData(Boots);
        else if(props.category === 'guards')setData(Guards);
        
    },[props.category])
    
  return (
    
    <div>
        <h1>{props.category}</h1>
        <section className="itemContainer d-flex flex-wrap gap-5 p-5">
            {data.map((item,index)=>{
                return(
                    <ItemCard key={index} imgUrl={item.imgUrl} name={item.name}/>
                )
            })}
        </section>
    </div>
  )
}

export default Section;