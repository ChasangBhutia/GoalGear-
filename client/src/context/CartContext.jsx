import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.length;
    let totalItems = 0;
   
    cartItems.map(item=>{
        totalItems = totalItems + item.itemQuantity;
    })
    console.log(totalItems);
    
    
    

    const addToCart = (productValue, selectedSizeValue, itemQuantityValue) => {
        setCartItems((prevVal) => {
            const exist = prevVal.find(f => f.product.id === productValue.id);
            if (exist) {
                return prevVal.map((item) => {
                    return item.product.id === productValue.id
                        ? { ...item, itemQuantity: item.itemQuantity + itemQuantityValue }
                        : item
                });
            } else {
                const newItem = {
                    product: productValue,
                    selectedSize: selectedSizeValue,
                    itemQuantity: itemQuantityValue
                }
                return [...prevVal, newItem]
            }
        })
    }

    const deleteItem = (productId) => {
        setCartItems(() => {
            return (cartItems.filter(c => c.product.id !== productId));
        })
        console.log(cartItems);

    }


    return (
        <CartContext.Provider value={{ deleteItem, cartQuantity, cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}