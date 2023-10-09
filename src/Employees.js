import axios from 'axios';
import { useState,useEffect } from 'react';
function Employees(){
    const [employees,setEmployees] = useState ([])
     useEffect(()=> {
         axios.get('http://hub.dummyapis.com/employee').then(response =>{
            console.log(response.data);
            setEmployees(response.data);
         })
    },[])
}
export default Employees;