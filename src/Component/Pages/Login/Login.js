import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { error, handleGetEmail, handleGetPassword, signInWithGoogle, loginWithEmailPassword } = useAuth();

    //redirect user after login
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className='container'>
            <div className="title text-center my-5">
                <h1 >Please Login...</h1>
            </div>
            <form onSubmit={loginWithEmailPassword} className="row g-3 mt-5 w-50 m-auto">
                <span className="text-danger">{error}</span>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onBlur={handleGetEmail} type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input onBlur={handleGetPassword} type="password" className="form-control" id="inputPassword4" required />
                </div>
                <div className="col-12">
                    <div>
                        <button className='login me-3' type="submit">Log In</button>
                    </div>
                </div>
            </form>
            <div className='text-center'>
                <button onClick={handleSignInWithGoogle} className='signUp mt-1'>Login with google</button>
            </div>
        </div>
    );
};

export default Login;