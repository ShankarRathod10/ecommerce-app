function Employee(props){
    return(
         <div className="col-sm-4" >
                <div className="m-2 p-4 border"style={{height: "500px"}}>
                <div className="text-center"><img src={props.emp.imageUrl} /></div>
                <h5>Id : <span>{props.emp.id}</span></h5>
                <h5>FullName : <span>{props.emp.firstName}{props.emp.lastName}</span></h5>
                <h5>Email : <span>{props.emp.email}</span></h5>
                <h5>Contact No : <span>{props.emp.contactNumber}</span></h5>
                <h5>Age : <span>{props.emp.age}</span></h5>
                <h5>DOB : <span>{props.emp.dob}</span></h5>
                <h5>Salary : <span>{props.emp.salary}</span></h5>
                <h5>Address : <span>{props.emp.address}</span></h5>
                <button className="text-right btn btn-success " onClick={()=> props.selectEmployee(props.emp)}>Select</button> 
                </div>
             
        </div>
    )

}
export default Employee;