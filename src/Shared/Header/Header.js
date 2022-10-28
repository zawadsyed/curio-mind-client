import React from 'react';
import img from '../../assets/curio-mind-logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLougOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-slate-100 pb-2 z-10'>
            <div className='flex justify-end' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <FiXCircle className='w-8 h-8 md:hidden'></FiXCircle>
                        :
                        <FiMenu className='w-8 h-8 md:hidden'></FiMenu>
                }
            </div>
            <div className={`md:flex mt-4`}>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Curio Mind</Link>
                <ul className={`md:flex w-full bg-slate-100 absolute md:static justify-end p-6 md:p-0 duration-300 ease-in ${open ? 'top-4' : 'top-[-5px]'}`}>
                    <div className='md:flex p-0 items-center gap-8'>
                        <Link to='/courses'><li>All courses</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/faq'><li>FAQ</li></Link>
                    </div>
                    <div className='mr-4 my-2'>
                        {
                            user?.uid && <><img title='user profile picture' className='rounded-full h-10' src={user?.photoURL} alt="" /></>
                        }
                    </div>
                    <div>
                        {
                            user?.uid ?
                                <div>
                                    < button onClick={handleLougOut} className='btn btn-outline btn-error'>
                                        Sign Out
                                    </button>
                                </div>
                                :
                                <div>
                                    <Link className='mr-3' to='/login'><button className='btn btn-secondary text-white'>Log In</button></Link>
                                    <Link to='/register'><button className='btn btn-primary'>Register</button></Link>
                                </div>
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;