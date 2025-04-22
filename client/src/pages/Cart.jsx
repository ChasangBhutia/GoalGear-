import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useCart } from '../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Cart = () => {

  const { totalPrice, totalItems, deleteItem, cartItems } = useCart();

  const hrStyle = {
    width:"200px",
    margin:"auto",
    border:"none",
    borderBottom:"3px solid black",
  }

  return (
    <div className='text-center pb-5'>
      <Navbar />
      <h1 className='mt-5 mb-4'>Cart</h1>
      <section className="cartContainer container">
        <table className="container">
          <tbody>
            <tr className="cartContainerHeading">
              <td><h5>S.No</h5></td>
              <td><h5>Product</h5></td>
              <td><h5>Name</h5></td>
              <td><h5>Price</h5></td>
              <td><h5>Quantity</h5></td>
              <td><h5>Size</h5></td>
              <td><h5>Remove</h5></td>

            </tr>
            {cartItems.map((item, index) => {
              return (
                <tr key={index} className='cartDetailsContainer mt-2'>
                  <td><span>{index + 1}</span></td>
                  <td className='p-2'><img src={item.product.imgUrl} alt={item.product.name} height={80} width={60} /></td>
                  <td><p>{item.product.name}</p></td>
                  <td><span>₹{item.product.price}</span></td>
                  <td><span>{item.itemQuantity}</span></td>
                  <td><span>{item.selectedSize}</span></td>
                  <td><DeleteIcon onClick={() => { deleteItem(item.product.id) }} /></td> 
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
            <hr style={hrStyle}/>
      <section className="d-flex container p-5 justify-content-between">
        <Link style={{color:"black",textDecoration:"underline"}} to="/">Continue Shopping</Link>
        <section className="checkout d-flex flex-column" style={{width:500}}>
            <header className='d-flex justify-content-between ps-2 px-2'><span>Subtotal:</span> <span>₹{totalPrice}</span></header>
            <button className='btn btn-danger'>Checkout</button>
        </section>
      </section>
            <hr style={hrStyle}/>
            <Footer/>
    </div>
  )
}

export default Cart