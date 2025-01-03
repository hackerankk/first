import React ,{useContext,useEffect,useState}from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductionItem from './ProductionItem'


const LatestCollection = () => {
   const { products } = useContext(ShopContext);
   console.log(products);
   
   const [latestProducts, setLatestProducts] = useState([])
   useEffect(()=>{
    setLatestProducts(products.slice(0,10));
   },[])
   
    
  return (
    <>
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
       
        <p className=' w-3/4 m-auto text-xs sm:text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab!
        </p>
      </div>
      <div className="grid grid-cols-2  sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((item,index)=>(
          <ProductionItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>

    </div>
    </>
  )
}

export default LatestCollection