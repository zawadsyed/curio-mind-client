import React from 'react';
import img from '../../assets/curio-mind-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/courses'>All Courses</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                        <li className='mr-3'><Link to='/faq'>FAQ</Link></li>
                        {
                            user?.uid ?
                                <>
                                    {user.displayName}
                                    {
                                    }

                                </>
                                :
                                <>
                                    <button className='mr-2 btn btn-primary rounded-md'>Log In</button>
                                    <button className='btn btn-secondary text-white rounded-md'>Registration</button>
                                </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;