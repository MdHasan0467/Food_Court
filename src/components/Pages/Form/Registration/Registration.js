import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import ReviewAnimation from "../../../../Assets/Animations/signup-verification.json";
import Lottie from "lottie-react";



const Registration = () => {

  const { createUser, loading, logOut} = useContext(AuthContext)

  const navigate = useNavigate()
  

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;



  


	const { register, handleSubmit, formState: { errors } } = useForm();



		//! from .env.local file====>
		const imgHostKey = process.env.REACT_APP_Imgbb_key;
		// console.log(imgHostKey);
	
	
	
	







  const handleRegister = data => {
    


    
    
    const name = data.name;
    const number = data.number;
    const email = data.email;
    const password = data.password;
    const role = data.role;
    const image = data.img;
    // console.log(role, image)

    






    createUser(email, password)
      .then(result => {
        const user = result.user;



    
    
    
    
    
    
    
    //! ==========< Image Hosting >==========

		const formData = new FormData()
	  
		formData.append('image', image[0])

		// console.log(formData)		
		
		const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url)




          

        const addedUser = {
          name,
		  number,
          email,
          password,
          role,
          image:imgData.data.url
        }








        



        //! Save User info to the database....
					fetch('https://food-court-server-three.vercel.app/users', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedUser),
					})
						.then((res) => res.json())
						.then((result) => {
							// console.log(result);


							navigate('/login')
							logOut()
                            toast.success('Registration successful')


						});





        }
      });	




      })
      .catch(err => console.error(err));


  }






      //! Loading . . .
      if (loading) {
        <Loader></Loader>
    }





    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="text-center lg:text-left">
           {/* <img className='h-[500px] w-[600px] rounded-2xl' src="signUp-img.png" alt="" /> */}
		   <div>
              <Lottie animationData={ReviewAnimation} loop={true}></Lottie>
            </div>
          </div>
          <div className="card border-t-4 border-t-rose-400 flex-shrink-0 shadow-2xl bg-base-100 w-1/2">
              <div className="card-body">
              <h3 className='font-serif text-2xl'>Register Here</h3>
              <form
				onSubmit={handleSubmit(handleRegister)}
				className='card-body'
				>
							
				<div className="flex">
					<div className='form-control mx-1 w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Full Name </span>
									</label>
									<input
										type='text'
										{...register('name', {
											
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.name && (
										<p className='text-red-500'>
											{errors.name.message}
										</p>
									)}
                </div>
							
                  
                  
                  
				<div className='form-control mx-1 w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>email </span>
										</label>
										<input
											type='email'
											{...register('email', {
												
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.email && (
											<p className='text-red-500'>
												{errors.email.message}
											</p>
										)}
					</div>
				</div>
							
							
                  
                  
                  
				<di mx-1v className="flex">
                    <div className='form-control mx-1 w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Password </span>
								</label>
									<div className="">
									<input
								       type={changePassword ? "password" : "text"}
									{...register('password', {
										
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.password && (
									<p className='text-red-500'>{errors.password.message}</p>
								)}
								<span className="flex items-center mx-2"
								onClick={() => {
								   setChangePassword(changeIcon);
								}}
							 >
								{changeIcon ?
								 <p className='flex group cursor-pointer'>
									<span className='mr-2 group-hover:underline'>Hidden Password</span>
									<BsEyeSlashFill className='mt-1' />
								 </p> 
								 :
								  <p className='flex group cursor-pointer'>
									<span className='mr-2 group-hover:underline'>Show Password</span>
									<BsEyeFill className='mt-1' />
									</p>}
							 </span>
									</div>
                </div>
                  
						
				<div className='form-control mx-1 w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Who you are ?</span>
								</label>
								<select
									{...register('role', {
									required: true,
									})}
									className='select input-bordered w-full max-w-xs'
								>
									<option disabled>Choose your role</option>
									<option>Buyer</option>
									<option>Seller</option>
								</select>
								{errors.role && (
									<p className='text-red-500'>{errors.role.message}</p>
								)}
					</div>
                </di>


				<div className="flex">
					

				<div className='form-control mx-1 w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Number </span>
										</label>
										<input
											type='number'
											{...register('number', {
												
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.number && (
											<p className='text-red-500'>
												{errors.number.message}
											</p>
										)}
					</div>
				
							
							


                <div className='form-control mx-1 w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Photo</span>
								</label>
								<input
									type='file'
									{...register('img', {
										required: 'Photo is Required',
									})}
									className='input input-bordered w-full max-w-xs'
									
								/>
								{errors.img && (
									<p className='text-red-500'>{errors.img.message}</p>
								)}
				</div>

				</div>

				<input
					className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white w-full mt-4'
					value='Register'
					type='submit'
					/>
			</form>
               
              <label className="label">
               <a href="#" className="label-text-alt link link-hover">
                   <Link to='/authentication/login'>Already have an account?</Link>
               </a>
              </label>
             </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Registration;