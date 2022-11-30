import React from 'react'
import {useJobsContext} from "shared/hooks/useJobsContext";

export const Statistics = () => {
    const {context} = useJobsContext();

    return (
        // "Show jobs count"
        <div>count of jobs: {context.jobs.length}</div>
    )
}
