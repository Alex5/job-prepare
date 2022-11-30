import {createContext, Dispatch} from "react";
import {IJob} from "shared/types";

type IJobsState = {
    jobs: IJob[]
}

export enum JobsActionsEnum {
    SET_JOBS = 'SET_JOBS',
}

export type JobAction = {
    type: JobsActionsEnum;
    payload: IJob[];
}

export const initialJobsState: IJobsState = {
    jobs: []
}

export const jobsReducer = function (state: IJobsState, action: JobAction) {
    switch (action.type) {
        case JobsActionsEnum.SET_JOBS:
            return {...state, jobs: action.payload};
        default:
            throw new Error();
    }
}

export const JobsContext = createContext<IJobsState>(initialJobsState);
export const JobsDispatchContext = createContext<Dispatch<JobAction> | null>(null);