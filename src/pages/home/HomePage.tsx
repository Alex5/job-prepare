import React from 'react'
import MainLayout from "layouts/MainLayout";
import {Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <MainLayout>
            <Outlet/>
        </MainLayout>
    )
}