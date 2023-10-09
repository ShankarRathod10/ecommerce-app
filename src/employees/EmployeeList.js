import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Employee from './Employee';
function EmployeeList (){
    const [employees,setEmployees] = useState([])
    useEffect(() => {
        getAllEmployees();

    } , [])
      
    const getAllEmployees = () =>{
        axios.get('https://hub.dummyapis.com/employee?noofRecords=108idstarts=1001').then(response =>{
            const {data} = response;   
            setEmployees(data);
            console.log(employees)
        })

    };
     const selectEmployee = (emp) => {
        console.log(emp)
     } 
    return (
        <div className='container'>
            <div className='row'>
               {employees.map(emp => (
                    <Employee emp={emp} selectEmployee={selectEmployee}/>
                
            ))}
            </div>
        </div>

    );
}
export default EmployeeList;