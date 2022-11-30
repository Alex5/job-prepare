import { styled } from '@stitches/react';
import {HTMLAttributes} from "react";

type CardProps = {
    isPressable?: boolean
} & HTMLAttributes<HTMLDivElement>
export function Card(props: CardProps) {
    const {children} = props;

    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled('div', {
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '10px',
    borderRadius: '10px',
    variants: {
        isPressable: {
            true: {
                cursor: 'pointer'
            }
        }
    }
});