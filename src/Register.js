import React ,{useState} from 'react';
import {useForm} from 'react-hook-form';
function Register (){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const resgisterUser = (data) => {
        console.log(data);
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 mx-auto my-5'>
                    <form onSubmit={handleSubmit(resgisterUser)}>
                        <div className='mb-3'> 
                            <label htmlFor="firstName" className='form-lable' style={{color:"light-green"}}>First Name<span className="text-danger">*</span></label>
                            <input type="text" className='form-control' id="firstName"{...register('firstName', {required : "true"})} placeholder=" Enter First Name" />
                            <p className='text-danger'>{errors['firstName'] && "Please Enter First Name"}</p>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="lastName" className='form-lable'>Last Name<span className="text-danger">*</span></label>
                            <input type="text" className='form-control' id="lastName" {...register('lastName', {required : "true"})} placeholder=" Enter Last Name" />
                            <p className='text-danger'>{errors['lastName'] && "Please Enter Last Name"}</p>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="email" className='form-lable'>Email <span className="text-danger">*</span></label>
                            <input type="email" className='form-control' id="email" {...register('email', {required : "true"})} placeholder=" Enter Email" />
                            <p className='text-danger'>{errors['email'] && "Please Enter Email"}</p>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="paassword" className='form-lable'>Password <span className="text-danger">*</span></label>
                            <input type="text" className='form-control' id="password" {...register('password' ,{required : "true"})} placeholder=" Enter Password" />
                            <p className='text-danger'>{errors['paassword'] && "Please Enter Password"}</p>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="mobileNo" className='form-lable'>Phone No <span className="text-danger">*</span></label>
                            <input type="text" className='form-control' id="mobileNo" {...register('mobileNo' ,{required : "true"})} placeholder=" Enter Phone No" />
                            <p className='text-danger'>{errors['mobileNo'] && "Please Enter Mobile No"}</p>
                        </div>
                        <button className="btn btn-success my-3" type='submit'>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
} 
export default Register;