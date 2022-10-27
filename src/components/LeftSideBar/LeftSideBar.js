import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = ({ course }) => {
    const { id, course_title } = course;
    return (
        <div className='flex flex-col items-start mb-4'>
            <Link to={`/courses/${id}`}><button className="btn btn-outline btn-primary text-left p-2 capitalize leading-5 h-auto">{course_title}</button></Link>

        </div >
    );
};

export default LeftSideBar;