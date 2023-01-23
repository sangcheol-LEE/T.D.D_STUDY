import React,{useEffect,useState} from 'react'
import Axios from 'axios'

const Types:React.FC = ({orderType}) => {
   const [items, setItems] = useState([]);
   useEffect(() => {
      loadItems(orderType)
   },[orderType])

   const loadItems = async() => {
      try{
         const response = Axios.get(`http://localhost:5000/${orderType}`)
         setItems(response.data)
      }catch(e) {
         console.error(e)
      }
   }

   const ItemComponents = orderItem === "products" ? Products : null;

   const optionItems = items.map((item) => (
      <ItemComponents
         key={item.name}
         name={item.name}
         imagePath={item.imagePath}
      />
   ))

   return (
      <div>
         Type
      </div>
   )
}

export default Types
