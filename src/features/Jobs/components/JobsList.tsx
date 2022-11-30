import {IJob} from "shared/types";
import {JobCard} from "./JobCard";
import {styled} from "@stitches/react";

export function JobsList({jobs}: { jobs: IJob[] }) {
    return (
        <StyledJobsList>
            {jobs.map(job => (
                <JobCard key={job.id} {...job} />
            ))}
        </StyledJobsList>
    )
}

const StyledJobsList = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    gridColumnGap: '20px',
    gridRowGap: '20px',
})