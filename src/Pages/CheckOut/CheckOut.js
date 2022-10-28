import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    const { name, id, course_title, price } = courseDetails;

    return (
        <div className='mt-6'>
            <h1 className='text-2xl'>Congratulations!! You have successfully unlocked the premium access of {course_title}</h1>
            <p>Price: {price}</p>
            <p>Thank you!!!</p>
        </div>
    );
};

export default CheckOut;