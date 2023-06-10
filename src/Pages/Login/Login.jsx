import React, { useContext, useState } from 'react';
import register from "../../assets/loginImage/undraw_secure_login_pdn4.svg"
import log from "../../assets/loginImage/undraw_secure_login_pdn4.svg"
import "./login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Authcontext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [loginError, setLoginError] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { signIn, signInWithGoogle } = useContext(Authcontext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Logged in as ${result.user.email}`,
                });
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => setLoginError("Invalid email or password"));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <div className="login-container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleLogin} className="sign-in-form signForm">
                            <h2 className="title">Sign in</h2>
                            <p className="text-red-600 text-sm">{loginError}</p>
                            <div className="input-field">
                                <FaUser className="h-6 w-6 mt-3" />
                                <input type="email" name="email" placeholder="UserEmail" />
                            </div>
                            <div className="input-field">
                                <FaLock className="h-6 w-6 mt-3" />
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className=' relative'
                                />
                                <div className=' absolute top-3 text-xl w-4'>
                                    {passwordVisible ? (
                                        <FaEyeSlash
                                            className="password-toggle ml-72"
                                            onClick={togglePasswordVisibility}
                                        />
                                    ) : (
                                        <FaEye
                                            className="password-toggle ml-72"
                                            onClick={togglePasswordVisibility}
                                        />
                                    )}
                                </div>
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <button onClick={handleGoogleLogin} href="#" className="social-icon">
                                    <FaGoogle />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <Link to="/signUp">
                                <button className="btn transparent" id="sign-up-btn">
                                    Sign up
                                </button>
                            </Link>

                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
