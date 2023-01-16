import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const Registration = () => {

  const { createUser, loading, logOut} = useContext(AuthContext)

  const navigate = useNavigate()
  





  


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();



		//! from .env.local file====>
		const imgHostKey = process.env.REACT_APP_Imgbb_key;
		// console.log(imgHostKey);
	
	
	
	







  const handleRegister = data => {
    


    
    
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const role = data.role;
    const image = data.img;
    console.log(role, image)

    






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
          email,
          password,
          role,
          image:imgData.data.url
        }








        



        //! Save User info to the database....
					fetch('http://localhost:5000/users', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedUser),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);


							navigate('/login')
							logOut()
                            alert('Registration successful')


						});





        }
      });	




      })
      .catch(err => console.error(err));
    
    
    
    


    









    



  }




      //! Loding . . .
      if (loading) {
        <Loader></Loader>
    }





    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img className='h-[500px] w-[600px] rounded-2xl' src="signUp-img.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
              <h3 className='font-serif text-2xl'>Register Here</h3>
              <form
							onSubmit={handleSubmit(handleRegister)}
							className='card-body'
						>
							
								
								
							
							
								
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Full Name :</span>
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
                  






								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>email :</span>
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
							
							
                  
                  
                  
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Password :</span>
								</label>
								<input
									type='password'
									{...register('password', {
										
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.password && (
									<p className='text-red-500'>{errors.password.message}</p>
								)}
              </div>
                  

                  
                  
                  
              <div className='form-control w-full max-w-xs'>
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




							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Photo:</span>
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
							<input
								className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white w-full mt-4'
								value='Register'
								type='submit'
							/>
						</form>
               
              <label className="label">
               <a href="#" className="label-text-alt link link-hover">
                   <Link to='/login'>Already have an account?</Link>
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