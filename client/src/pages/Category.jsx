import React from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section/Section';
import Navbar from '../components/Navbar/Navbar';

const Category = () => {

    const {type} = useParams();
    
  return (
    <div>
        <Navbar/>
       {type==='boots' && <Section category='boots'/>}
       {type==='gloves' && <Section category='gloves'/>}
       {type==='guards' && <Section category='guards'/>}
       {type==='jersey' && <Section category='jersey'/>}
       {type==='bags' && <Section category='bags'/>}
       {type==='socks' && <Section category='socks'/>}
    </div>
  )
}

export default Category