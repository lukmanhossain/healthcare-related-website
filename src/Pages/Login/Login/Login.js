import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const handleEmailChange = e => {
    console.log(e.target.value);
}
const handlePasswordChange = e => {
    console.log(e.target.value);
}

const handleLogin = e => {
    console.log('register');
    e.preventDefault();
}

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="form-container p-3 m-5">
            <form className="form p-3" onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <h5>Sign In to access your account</h5>
                <div className="row mb-3">
                    <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Email Address :</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlfor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlfor="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <div>-------------  Or Sign In With -----------------</div>
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google</button>
        </div>
    );
};

export default Login;