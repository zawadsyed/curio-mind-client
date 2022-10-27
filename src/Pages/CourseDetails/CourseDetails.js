import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    const { id, course_title, rating, details, student, price, topic, img } = courseDetails
    return (
        <div className='mt-12'>
            <div className="card bg-base-100 shadow-xl p-9">
                <figure><img className='object-cover' style={{ width: '990px', height: '550px' }} src={img} alt="Shoes" /></figure>
                <div className="card-body justify-center">
                    <div className="card-title flex flex-wrap justify-center">
                        <h1 className=' text-center justify-center font-bold text-3xl'>{course_title}</h1>
                        <div className="badge badge-secondary bg-blue-300 p-3 rounded-xl">{topic}</div>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions justify-center">
                        <h3>Price: <span className='font-bold text-5xl'>{price}</span></h3>
                    </div>
                    <div>
                        <small>{student}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;