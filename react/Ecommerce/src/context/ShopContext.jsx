import react, { createContext } from "react"
import { products } from "../assets/Ecommerce-assets/assets/frontend_assets/assets"
export const ShopContext =createContext();

const ShopcontextProvider =(props)=>{
    const currency ="$"
    const delveryfee =10;

    const value ={
        products,
        currency,
        delveryfee
    }
    return(
        <ShopContext.Provider value={value}>
       {props.children}
    </ShopContext.Provider>
    )

};
export default ShopcontextProvider