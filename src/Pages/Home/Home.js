import React from 'react';
import img from '../../assets/hero-img.jpg';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const { providerSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSignInGoogle = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    const handleSignInGithub = () => {
        providerSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='mt-12 mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Learning Today, <br />
                <span className='text-blue-700 leading-7 text-center'>Leading Tomorrow</span></h1>
            <p className='mt-5'>At times, Training and Development can be quite expensive. <br />
                Curio Mind promises to deliver high-quality education at low prices
                to help you grow as a person and get the desired skills to excel in your career.</p>
            <div className='mt-6'>
                <button onClick={handleSignInGoogle} className='btn btn-primary'><FaGoogle className='mr-2'></FaGoogle>  Sign In with Google</button>
                <button onClick={handleSignInGithub} className='btn btn-active'><FaGithub className='mr-2'></FaGithub>  Sign In with Google</button>

            </div>
            <div className='mt-12'>
                <img style={{ width: '750px', height: '412px' }} className='object-cover mx-auto' src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;