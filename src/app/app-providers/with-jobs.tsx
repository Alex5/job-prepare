import {ReactNode} from "react";
import {JobsProvider} from "providers/jobs/JobsProvider";

export const withJobs = (component: () => ReactNode) => () => {
    return (
        <JobsProvider>
            {component()}
        </JobsProvider>
    )
}