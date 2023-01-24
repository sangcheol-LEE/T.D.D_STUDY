import React from 'react'
import Types from './Types'

const OrderPage:React.FC = () => {
   export interface Props {
      orderType : string
   }
   return (
      <div>
         <Types orderType="products"}/>
      </div>
   )
}

export default OrderPage
