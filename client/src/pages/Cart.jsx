import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useCart } from '../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  const { deleteItem, cartItems } = useCart();
  console.log(cartItems);


  return (
    <div className='text-center'>
      <Navbar />
      <h1 className='mt-5 mb-4'>Cart</h1>
      <section className="cartContainer container">
      <table className="container">
        <tbody>
        <tr className="cartContainerHeading">
          <td><h3>S.No</h3></td>
          <td><h3>Product</h3></td>
          <td><h3>Name</h3></td>
          <td><h3>Price</h3></td>
          <td><h3>Quantity</h3></td>
          <td><h3>Size</h3></td>
          <td><h3>Remove</h3></td> 
          
        </tr>
        {cartItems.map((item,index)=>{
          return(
            <tr key={index} className='cartDetailsContainer'>
              <td><span>{index+1}</span></td>
              <td><img src={item.product.imgUrl} alt={item.product.name} height={80} width={60}/></td>
              <td><p>{item.product.name}</p></td>
              <td><span>{item.product.price}</span></td>
              <td><span>{item.itemQuantity}</span></td>
              <td><span>{item.selectedSize}</span></td>
              <td><DeleteIcon onClick={()=>{deleteItem(item.product.id)}}/></td>
            </tr>
          )
        })}
        </tbody>
      </table>
      </section>
     
    </div>
  )
}

export default Cart