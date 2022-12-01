import {supabase} from "supabase.config";
import {defer} from "react-router-dom";

export async function getJobs() {
    const {data, error} = await supabase.from("jobs").select("*");

    if (error) {
        throw new Error(error.message);
    }

    return defer({
        jobs: data
    });
}

export async function getJobInfo(jobId: string) {
    return await (await fetch(`https://jsonplaceholder.typicode.com/users/${jobId}`)).json();
}