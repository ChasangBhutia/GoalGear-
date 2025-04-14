import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.length;
    

    const addToCart = (productValue, selectedSizeValue, itemQuantityValue) => {

        const newItem = {
            product:productValue,
            selectedSize:selectedSizeValue,
            itemQuantity:itemQuantityValue
        }

        setCartItems((prevVal) => {
            return [...prevVal, newItem];
        })
    }

    const deleteItem = (productId) =>{
        setCartItems(()=>{
            return(cartItems.filter(c=>c.product.id !== productId));
        })
        console.log(cartItems);
        
    }


    return (
        <CartContext.Provider value={{deleteItem,cartQuantity, cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}