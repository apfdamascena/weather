import styled from 'styled-components';
import { ArrowRightAlt } from '@mui/icons-material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export type ArrowRangeProps = {
  upArrow?: boolean
};

export const ArrowRange = styled(ArrowRightAlt)<ArrowRangeProps>`
    transform: ${(props) => {
    const multiplier = props.upArrow ? -1 : 1;
    const degrees = multiplier * 90;
    return `rotate(${degrees}deg)`;
  }};

    color: ${({ theme }) => theme.colors.icon};
`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    
    font-weight: 200;
    letter-spacing: 1px;
    text-align: right;
    width: 95%;

    position: relative;
    right: 4px;
  
    &.degree {
        width: 5%;
        font-size: 9px;
        margin-bottom: 6px;
        margin-left: 1px;
    }
`;
