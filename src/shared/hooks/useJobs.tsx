import useSwr from "swr";
import {getJobs} from "shared/api";

export function useJobs() {
    const { data, error } = useSwr("jobs", getJobs);

    return {
        jobs: data ?? [],
        loading: !data,
        error,
    }
}