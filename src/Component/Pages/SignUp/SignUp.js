import React from 'react';

const SignUp = () => {
    return (
        <div className='container'>
        <div className="title text-center my-5">
            <h1 >Please Register...</h1>
        </div>
        <span className="text-danger"></span>
        <form className="row g-3 mt-5 w-50 m-auto">
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" required />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" required />
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