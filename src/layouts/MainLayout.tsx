import React, {ReactNode} from 'react'
import {Header} from "components/Header";

type MainLayoutProps = {
    children: ReactNode
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
        </>
    )
}