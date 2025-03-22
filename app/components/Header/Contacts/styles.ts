import styled from "styled-components";
import { device } from "@/styles/mediaSizes";


export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;


    @media ${device.mobile} {
        gap: 10px;
    }


    @media ${device.tablet} {
        gap: 0.6rem;
    }


    @media ${device.desktop} {
        gap: 1rem;
    }
`;