import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const Registration = () => {

  const { createUser, loading} = useContext(AuthContext)

const navigate = useNavigate()





  const handleRegister = e => {
    e.preventDefault()


    const form = e.target;
    
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    






    createUser(email, password)
      .then(result => {
        const user = result.user;
        navigate('/login')
        form.reset()
        alert('Registration successful')
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
            <form onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" name='name' placeholder="Full Name" className="input input-bordered" />
              </div>
              
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-gradient-to-l hover:bg-gradient-to-r border-0">Register</button>
               </div>
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