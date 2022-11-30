import React from 'react'
import MainLayout from "layouts/MainLayout";
import {Outlet} from "react-router-dom";
import {Statistics} from "features/Statistics/Statistics";
import {JobsProvider} from "providers/jobs/JobsProvider";

export const HomePage = () => {
    return (
        <MainLayout>
            <Outlet/>
            <JobsProvider>
                <Statistics/>
            </JobsProvider>
        </MainLayout>
    )
}