import {Await, useLoaderData} from "react-router-dom";

import {JobsList} from "./components/JobsList";

import {IJob} from "shared/types";
import {Suspense} from "react";

export function Jobs() {
    const data = useLoaderData() as {jobs: IJob[]};
    
    return (
        <div>
            <span>Choose your job</span>
            <Suspense fallback={'Loading jobs...'}>
                <Await resolve={data.jobs} errorElement={<p>Error loading jobs!</p>}>
                    {(jobs) => (
                        <JobsList jobs={jobs}/>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}