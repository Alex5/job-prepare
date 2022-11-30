import useSwr from "swr";
import {getJobs} from "shared/api";
import {useJobsContext} from "./useJobsContext";

export function useJobs() {
    const { data, error } = useSwr("jobs", getJobs);

    const {dispatch} = useJobsContext();

    console.log(dispatch);

    return {
        jobs: data ?? [],
        loading: !data,
        error,
    }
}