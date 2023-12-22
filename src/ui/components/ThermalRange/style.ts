import styled from 'styled-components';
import { ArrowRightAlt } from '@mui/icons-material';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ArrowRange = styled(ArrowRightAlt)`
    transform: rotate(90deg);
    color: ${({ theme }) => theme.colors.iconWhiteColor};
`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.1rem;
    
    font-weight: 200;
    letter-spacing: 1px;
    

    &.degree {

        font-size: 9px;
        margin-bottom: 6px;
        margin-left: 1px;

        /* font-size: 10px !important; */

    }
`;
