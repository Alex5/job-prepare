import React from 'react'
import {useLoaderData} from "react-router-dom";

export const JobInfo = () => {
    const jobInfo = useLoaderData() as {username: string};
    return (
        <div>
            <span>{jobInfo.username}</span>
        </div>
    )
}