import React from 'react';

const CourseCard = ({ course }) => {
    console.log(course)
    const { course_title, id, img } = course;
    console.log(course);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl" >
                <figure className="px-10 pt-10">
                    <img src={img} alt="courses-name" className="rounded-xl h-80 object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title h-24">{course_title}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;