import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignIN, setIsSignIN] = useState(false);


    const auth = getAuth();

    const toggleSignIn = e => {
        setIsSignIN(e.target.checked);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return;
        }

        isSignIN ? processSignIN(email, password) : createNewUser(email, password);

    }

    const processSignIN = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="form-container p-3 m-5">
            <form className="form p-3" onSubmit={handleLogin}>
                <h1>{isSignIN ? 'Sign In' : 'Sign Up'}</h1>
                <h5>{isSignIN ? 'Sign In' : 'Sign Up'} and access to your account</h5>
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
                            <input onChange={toggleSignIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlfor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{isSignIN ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <div>-------------  Or Sign-In With -----------------</div>
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google</button>
        </div>
    );
};

export default Login;