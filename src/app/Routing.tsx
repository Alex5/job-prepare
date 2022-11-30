import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage, ErrorPage} from "pages";
import {Jobs} from "features/Jobs/Jobs";
import {getJobInfo, getJobs} from "shared/api";
import {JobInfo} from "features/Jobs/components/JobInfo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Jobs/>,
                loader: getJobs
            },
            {
                path: ":jobId",
                element: <JobInfo/>,
                loader: ({params}) => getJobInfo(params.jobId ?? ""),
            }
        ],
    },
]);

export const Routing = () => {
    return (
        <RouterProvider router={router}/>
    );
};