import {useContext} from "react";
import {JobsContext, JobsDispatchContext} from "providers/jobs";

export function useJobsContext() {
    return {
        context: useContext(JobsContext),
        dispatch: useContext(JobsDispatchContext),
    }
}