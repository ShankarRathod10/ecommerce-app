export default function userInfo(){
    const userInfo ={
        firstName : 'Rahul',
        lastName : 'Krishna',
        email : 'rahulk@gmail.com',
        contact : 8599963201
      };
      const trigger = () => {
        console.log('trigger')
      };
      const getUserInfo = (firstName,lastName,email,contact) => {
        console.log(firstName,lastName,email,contact)
      }
    return(
        <div>
            <h5>FirstName : {userInfo.firstName}</h5>
            <h5>LastNAme :  {userInfo.lastName}</h5>
            <h5>Email : {userInfo.email}</h5>
            <h5>Contact : {userInfo.contact}</h5>
            <button onClick={trigger}>Trigger Event</button>
            <button onClick={() => getUserInfo(userInfo.firstName)} >Get First Name</button>
            <button onClick={() => getUserInfo(userInfo.lastName)}>Get lastName</button>
        </div>
    )
}