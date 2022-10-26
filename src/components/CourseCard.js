import React from 'react';

const CourseCard = ({ course }) => {
    console.log(course)
    const { course_title, id, img } = course;
    console.log(course);
    return (
        <div>
            <img src={img} alt="" />
            <h1>{course_title}</h1>
        </div>
    );
};

export default CourseCard;