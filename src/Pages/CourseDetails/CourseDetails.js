import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaGraduationCap, FaStar, FaDownload } from "react-icons/fa";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { id, course_title, rating, details, student, price, topic, img } = courseDetails;
    const ref = React.createRef();
    return (
        <div className='mt-24'>
            <div ref={ref} className="card bg-base-100 shadow-xl p-9">
                <figure><img className='object-cover' style={{ width: '990px', height: '550px' }} src={img} alt="Shoes" /></figure>
                <div className="card-body justify-center">
                    <div className="card-title flex flex-wrap justify-center">
                        <h1 className=' text-center justify-center font-bold text-3xl'>{course_title}</h1>
                        <div className="badge badge-secondary bg-blue-300 p-3 rounded-xl">{topic}</div>

                        <Pdf targetRef={ref} filename={`Course ${id}.pdf`}>
                            {({ toPdf }) => <button className='m-4' onClick={toPdf}>
                                <p className='text-2xl text-blue-600 '><FaDownload></FaDownload></p></button>}
                        </Pdf>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions justify-center">
                        <h3>Price: <span className='font-bold text-5xl text-blue-600'>{price}</span></h3>
                    </div>
                    <div className='flex gap-1 justify-center mt-2'>
                        <FaGraduationCap className='w-8 h-8 text-blue-800'></FaGraduationCap>
                        <small className='text-2xl'>{student}</small>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <span className='text-lg'>{rating?.number}</span>
                        <FaStar className='text-yellow-500'></FaStar>
                    </div>
                    <Link to={`/checkout/${id}`}> <button className='btn btn-primary rounded-xl'>Get premium access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;