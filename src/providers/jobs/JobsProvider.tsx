import {initialJobsState, JobsActionsEnum, JobsContext, JobsDispatchContext, jobsReducer} from "./index";
import {ReactNode, useEffect, useReducer} from "react";
import { useRouteLoaderData } from "react-router-dom";
import {IJob} from "shared/types";

export function JobsProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(jobsReducer, initialJobsState);
    const jobs = useRouteLoaderData("jobs") as IJob[];

    useEffect(() => {
        dispatch({type: JobsActionsEnum.SET_JOBS, payload: jobs});
    }, [])

    return (
        <JobsContext.Provider value={state}>
            <JobsDispatchContext.Provider value={dispatch}>
                {children}
            </JobsDispatchContext.Provider>
        </JobsContext.Provider>
    )
}