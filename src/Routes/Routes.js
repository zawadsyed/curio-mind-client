import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Courses from '../Pages/Courses/Courses';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('')
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
        ]

    }
])