import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import CheckOut from '../Pages/CheckOut/CheckOut';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Courses from '../Pages/Courses/Courses';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <h1>404</h1>,
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
        ]

    }
])