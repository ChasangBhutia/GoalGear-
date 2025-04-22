import React from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section/Section';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Category = () => {

    const {type} = useParams();
  
  return (
    <div>
        <Navbar/>
       <Section category={type}/>
       <Footer/>
    </div>
  )
}

export default Category