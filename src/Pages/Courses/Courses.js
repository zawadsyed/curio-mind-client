import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Courses;