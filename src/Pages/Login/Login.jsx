import React, { useContext, useState } from 'react';
import register from "../../assets/loginImage/undraw_secure_login_pdn4.svg"
import log from "../../assets/loginImage/undraw_secure_login_pdn4.svg"
import "./login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLock, FaUser} from "react-icons/fa";
import { Authcontext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [loginError, setLoginError] = useState(null);
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
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    icon: 'success',
                    title: 'Google Login Successful',
                    text: `Logged in as ${user.email}`,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div >
            <div class="login-container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form onSubmit={handleLogin}  class="sign-in-form signForm">
                            <h2 class="title">Sign in</h2>
                            <p className='text-red-600 text-sm'>{loginError}</p>
                            <div class="input-field">
                               <FaUser className='h-6 w-6 mt-3'></FaUser>
                                <input type="email" name='email' placeholder="UserEmail" />
                            </div>
                            <div class="input-field">
                                <FaLock className='h-6 w-6 mt-3'></FaLock>
                                <input type="password" name='password' placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" class="btn solid" />
                            <p class="social-text">Or Sign in with social platforms</p>
                            <div class="social-media">
                                <button onClick={handleGoogleLogin} href="#" class="social-icon">
                                   <FaGoogle></FaGoogle>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <Link to="/signUp">
                                <button class="btn transparent" id="sign-up-btn">
                                    Sign up
                                </button>
                            </Link>

                        </div>
                        <img src={log} class="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
