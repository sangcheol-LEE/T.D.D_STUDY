import React,{useEffect,useState} from 'react';
import Axios from 'axios'
import Products from './Products';
import {Props} from "./OrderPage"
const Types:React.FC = (orderType:Props) => {
   console.log("orderType",orderType)
   const [items, setItems] = useState([]);
   useEffect(() => {
      loadItems(orderType)
   },[orderType])

   const loadItems = async(orderType:string) => {
      try{
         const response = Axios.get(`http://localhost:5000/${orderType}`)
         setItems(response.data)
      }catch(e) {
         console.error(e)
      }
   }


   interface User {
      name : string
      imagePath : string
   }
   const ItemComponents = orderType === "products" ? Products : null;

   const optionItems = items.map((item:User) => (
      <ItemComponents
         key={item.name}
         name={item.name}
         imagePath={item.imagePath}
      />
   ))

   return (
      <div>{optionItems}</div>
   )
}

export default Types
