import React from 'react';
import img from '../../assets/curio-mind-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLougOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Curio Mind</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 items-center">
                        <div className='menu menu-horizontal p-0 items-center gap-8'>
                            <Link to='/courses'><li>All courses</li></Link>
                            <Link to='/checkout'><li>Checkout</li></Link>
                            <Link to='/blog'><li>Blog</li></Link>
                            <Link to='/faq'><li>FAQ</li></Link>
                        </div>
                        <div className='mr-4'>
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
        </div>
    );
};

export default Header;