import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { user, error, handleGetEmail, signInWithGoogle, handleGetPassword, handleRegistration, toggleLoginAndOut, isLogin } = useAuth();
    //redirect user after login
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    //redirect after sign in or login with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className='container'>
            <div className="title text-center">
                <img className='my-3' src="https://i.ibb.co/rb8w8Lj/Fitness-logo.png" alt="logo" />
                <h1 >Please {isLogin ? 'Login' : 'Register'}...</h1>
            </div>
            {
                user.email &&
                <div className='my-2'>
                    <h4 className='text-success text-center'>Successfully</h4>
                    <div className='text-center'>
                        <Link to='/home'>
                            <button><i className="fas fa-arrow-left pe-1"></i>Back To Home</button>
                        </Link>
                    </div>
                </div>
            }
            <form onSubmit={handleRegistration} className="row g-3 w-50 m-auto">
                <span className="text-danger">{error}</span>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onBlur={handleGetEmail} type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input onBlur={handleGetPassword} type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12 d-flex align-items-center">
                    <div>
                        <button className='login me-3' type="submit">{isLogin ? 'Login' : 'Register'}</button>
                    </div>
                    <div class="form-check">
                        <input onChange={toggleLoginAndOut} type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" htmlFor="exampleCheck1">Have an account?</label>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <div><h5>--------OR--------</h5></div>
                    <button onClick={handleSignInWithGoogle} className='signUp mt-1'>Login with google</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;