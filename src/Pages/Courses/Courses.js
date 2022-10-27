import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='flex gap-16'>
            <div>
                {courses.map(course => <LeftSideBar key={course.id}
                    course={course}
                ></LeftSideBar>)}
            </div>
            <div className='grid grid-cols-3 gap-12 col-span-10'>
                {
                    courses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>

    );
};

export default Courses;