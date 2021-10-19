import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { user, error, handleGetEmail, handleGetPassword, handleRegistration } = useAuth();
    return (
        <div className='container'>
            <div className="title text-center my-5">
                <h1 >Please Register...</h1>
            </div>
            {
                user.email &&
                <>
                    <h4 className='text-success text-center'>Successfully Registration</h4>
                    <div className='text-center'>
                        <Link to='/home'>
                            <button><i className="fas fa-arrow-left pe-1"></i>Back To Home</button>
                        </Link>
                    </div>
                </>
            }
            <form onSubmit={handleRegistration} className="row g-3 mt-5 w-50 m-auto">
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
                        <button className='login me-3' type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;