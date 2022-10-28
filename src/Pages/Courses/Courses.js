import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='md:flex gap-16'>
            <aside className='w-full p-6 sm:w-60 flex flex-col'>
                {courses.map(course => <LeftSideBar key={course.id}
                    course={course}
                ></LeftSideBar>)}
            </aside>
            <div className='grid grid-rows-6 lg:grid-rows-2 grid-flow-col gap-4'>
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