import React from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section/Section';
import Navbar from '../components/Navbar/Navbar';

const Category = () => {

    const {type} = useParams();
  
  return (
    <div>
        <Navbar/>
       <Section category={type}/>
    </div>
  )
}

export default Category