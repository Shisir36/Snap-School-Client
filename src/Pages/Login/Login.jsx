import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import register from "../../assets/loginImage/undraw_secure_login_pdn4.svg";
import log from "../../assets/loginImage/undraw_secure_login_pdn4.svg";
import "./login.css";
import { Authcontext } from '../../Provider/AuthProvider';

const Login = () => {
    const [loginError, setLoginError] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { signIn, signInWithGoogle } = useContext(Authcontext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Logged in as ${result.user.email}`,
                });
                navigate(from, { replace: true });
            })
            .catch(error => setLoginError("Invalid email or password"));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.photoURL, role:"student" };
                fetch('https://snap-school-server-shisir36.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    });
            });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <div className="login-container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSubmit(handleLogin)} className="sign-in-form signForm">
                            <h2 className="title">Sign in</h2>
                            <p className="text-red-600 text-sm">{loginError}</p>
                            <div className="input-field">
                                <FaUser className="h-6 w-6 mt-3" />
                                <input type="email" {...register('email', { required: 'Email is required' })} placeholder="UserEmail" className=' ' />
                                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                            </div>
                            <div className="input-field">
                                <FaLock className="h-6 w-6 mt-3" />
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    {...register('password', { required: 'Password is required' })}
                                    placeholder="Password"
                                    className=' relative  '
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
                            <input type="submit" value="Login" className="lbtn solid hover:bg-blue-500" />
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
                                Unleash your creativity behind the lens. Join Snap School of Photography today! Sign up now and embark on an exciting educational journey.
                            </p>
                            <Link to="/signUp">
                                <button className="btn transparent rounded-full" id="sign-up-btn">
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

