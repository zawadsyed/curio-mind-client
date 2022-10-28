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
        <div className='bg-slate-100 pb-2'>
            <div className='flex justify-end z-10' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <FiXCircle className='w-8 h-8 md:hidden'></FiXCircle>
                        :
                        <FiMenu className='w-8 h-8 md:hidden'></FiMenu>
                }
            </div>
            <div className={`md:flex mt-4`}>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='h-10' src={img} alt="" /></Link>
                <ul className={`md:flex w-full bg-slate-100 absolute md:static justify-end p-6 md:p-0 duration-300 ease-in ${open ? 'top-6' : 'top-[-500px]'}`}>
                    <div className='md:flex p-0 items-center gap-8'>
                        <Link to='/courses'><li>All courses</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/faq'><li>FAQ</li></Link>
                        <div>
                            <label className="swap swap-rotate">
                                <input type="checkbox" />


                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </div>
                    </div>
                    <div className='mr-4 my-2'>
                        {
                            user?.uid && <><img title={`${user?.displayName}`} className='rounded-full h-10' src={user?.photoURL} alt="" /></>
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