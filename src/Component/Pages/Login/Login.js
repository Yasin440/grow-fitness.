import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { error, handleGetEmail, handleGetPassword, signInWithGoogle, loginWithEmailPassword } = useAuth();

    //redirect user after login
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    //redirect after signin or login with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    //redirect after login with email and password..
    const handleLoginWithEmailPassword = () => {
        loginWithEmailPassword()
            .then(result => {
                history.push(redirect_url);
            })
            .then(result => {
                console.log('clicked');
            })
    }
    return (
        <div className='container'>
            <div className="title text-center">
                <img className='my-3' src="https://i.ibb.co/rb8w8Lj/Fitness-logo.png" alt="logo" />
                <h1 >Please Login...</h1>
            </div>
            <form onSubmit={handleLoginWithEmailPassword} className="row g-3 w-50 m-auto">
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
                        <button className='login me-3' type="submit">Log In</button>
                    </div>
                    <small><Link to='/register'>Want to create an account?</Link></small>
                </div>
            </form>
            <div className='text-center mt-4'>
                <div><h5>--------OR--------</h5></div>
                <button onClick={handleSignInWithGoogle} className='signUp mt-1'>Login with google</button>
            </div>
        </div>
    );
};

export default Login;