import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

  const { signIn } = useContext(AuthContext)
  
  const navigate = useNavigate()







  const handleLogin = e => {

    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   

    //! login By User Email
		signIn(email, password)
      .then(() => {
      
      navigate('/')

      toast('Login Successful');
      })
      
    .catch((error) => {
      toast('Something is wrong! Please Check and Try again');
    });




  }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="text-center">
            <img className='h-96 shadow-2xl rounded-2xl' src="loginFood.png" alt="" />
          </div>
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h3 className='font-serif text-2xl'>login Now</h3>
            <form onSubmit={handleLogin}>
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
                <label className="label">
                  <p  className="label-text-alt link link-hover hover:underline text-start">Forgot password?</p>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0">Login</button>
               </div>
               
            </form>
               
              <label className="label">
               <p  className="label-text-alt link link-hover hover:underline text-start">
                   <Link to='/register'>create a new account</Link>
               </p>
              </label>
             </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;