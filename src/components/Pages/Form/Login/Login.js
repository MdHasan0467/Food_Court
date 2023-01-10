import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

  const { signIn } = useContext(AuthContext)
  
  const navigate = useNavigate()







  const handleLogin = e => {

    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   

    // signIn(email, password)
    //   .then(result => {
    //     const user = result.user;

    //     navigate('/');
    //   })
    // .catch(err => console.error(err))




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
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0">Login</button>
               </div>
               
            </form>
               
              <label className="label">
               <a href="#" className="label-text-alt link link-hover">
                   <Link to='/register'>create a new account</Link>
               </a>
              </label>
             </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;