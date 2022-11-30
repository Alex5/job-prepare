import { Card } from 'shared/ui';
import { useNavigate } from 'react-router-dom'
import { IJob } from 'shared/types';

export function JobCard({id, title}: IJob) {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/${id}`)} isPressable>
            <header>
                <b>{title}</b>
            </header>
        </Card>
    )
}
