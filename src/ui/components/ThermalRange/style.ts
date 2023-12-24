import styled from 'styled-components';
import { ArrowRightAlt } from '@mui/icons-material';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export type ArrowRangeProps = {
  toUpward?: boolean
};

export const ArrowRange = styled(ArrowRightAlt)<ArrowRangeProps>`
    transform: ${(props) => {
    const multiplier = props.toUpward ? -1 : 1;
    const degrees = multiplier * 90;
    return `rotate(${degrees}deg)`;
  }};

    color: ${({ theme }) => theme.colors.iconWhiteColor};
`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.1rem;
    
    font-weight: 200;
    letter-spacing: 1px;
    text-align: right;
    

    &.degree {

        font-size: 9px;
        margin-bottom: 6px;
        margin-left: 1px;
    }
`;
