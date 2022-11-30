import {useLoaderData} from "react-router-dom";

import {JobsList} from "./components/JobsList";

import {IJob} from "shared/types";

export function Jobs() {
    const jobs = useLoaderData() as IJob[];
    
    return (
        <div>
            <span>Choose your job</span>
            <JobsList jobs={jobs}/>
        </div>
    )
}