import axios from 'axios';
import { useState,useEffect } from 'react'; 
function AddToCart(){
    const [addToCarts,setadToCarts] =useState([])
     useEffect(() => {
        axios.get('https://dummyjson.com/carts/1').then(response => {
            console.log(response.data);
            setadToCarts(response.data);
        })
     },[])
return(
    <div></div>
)
}
export default AddToCart;