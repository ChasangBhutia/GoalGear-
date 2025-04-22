import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.length;

    
    const totalItems = cartItems.reduce((sum, item)=>{
         return  sum + item.itemQuantity;
    },0)

    const totalPrice = cartItems.reduce((sum, item)=>{
        return sum + (item.itemQuantity * item.product.price)
    },0)

    
    

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
        <CartContext.Provider value={{totalPrice, totalItems, deleteItem, cartQuantity, cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}