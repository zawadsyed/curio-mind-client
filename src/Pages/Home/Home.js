import React from 'react';
import img from '../../assets/hero-img.jpg';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='px-96'>
            <h1 className='text-5xl font-bold'>Learning Today, <br />
                <span className='text-blue-700 leading-7'>Leading Tomorrow</span></h1>
            <p className='mt-5'>At times, Training and Development can be quite expensive. <br />
                Curio Mind promises to deliver high-quality education at low prices
                to help you grow as a person and get the desired skills to excel in your career.</p>
            <div className='mt-6'>
                <button className='btn btn-primary'><FaGoogle className='mr-2'></FaGoogle>  Sign In with Google</button>
                <button className='btn btn-active'><FaGithub className='mr-2'></FaGithub>  Sign In with Google</button>

            </div>
            <div className='mt-12'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;