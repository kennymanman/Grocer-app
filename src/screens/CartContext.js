import React, {useContext, useState} from "react"


const AddCartContext = React.createContext()
const AddSavedContext = React.createContext()

export function useCart(){
    return useContext (AddCartContext)
}

export function useSaved(){
    return useContext (AddSavedContext)

}


export function CartProvider({children}) {


const [cart, setCart] = useState([])
const [saved, setSaved] = useState([])


return (

<AddCartContext.Provider value={[cart, setCart]}>
    <AddSavedContext.Provider value={[saved, setSaved]}>

        {children}

    </AddSavedContext.Provider>
</AddCartContext.Provider>

)

}