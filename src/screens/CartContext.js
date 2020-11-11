import React, {useContext, useState} from "react"

export const AddCartContext = React.createContext()
export const AddSavedContext = React.createContext()
export const AddPagedContext = React.createContext()

export function CartProvider({children}) {
 const [cart, setCart] = useState([])
 const [saved, setSaved] = useState([])
 const [paged, setPaged] = useState([])




const cartContext = {

   cart,                                              //To Add Item to Cart
   updateCart: ({name, price, image}) => {
   const updatedCart = [...cart]
   updatedCart.push({ name, count:1, price, image })
   setCart(updatedCart)

    },

   removeFromCart: ({ name })=> {

    const updatedCart = cart.filter(item => item.name !== name)
    setCart(updatedCart);
  }
  };

  



  const savedContext = {
    saved,
    updateSaved: ({ name, price, image, description }) => {
      
      
      const updatedSaved = [...saved]
      updatedSaved.push({name, price, image, description})
      setSaved(updatedSaved)
    },

    removeFromSaved: ({name })=>{

    const updatedSaved = saved.filter(item => item.name !== name)
    setSaved(updatedSaved);  
    }
  };

  





  const PageContext = {
    paged,
    updatePaged: ({ name, price, image, description }) => {
      
      
      const updatedPaged = [...paged]
      updatedPaged.push({name, price, image, description})
      setPaged(updatedPaged)
    }
    
  };





return (
  <AddPagedContext.Provider value={PageContext}>
<AddCartContext.Provider value={cartContext}>
    <AddSavedContext.Provider value={savedContext}>
        {children}
    </AddSavedContext.Provider>
</AddCartContext.Provider>
</AddPagedContext.Provider>

)

}