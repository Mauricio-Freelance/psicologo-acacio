import styled from "styled-components";
import { device } from "@/styles/mediaSizes";

export const Container = styled.div`
    display: none;


    @media ${device.mobile} {
        display: inline-block;
        width: 100%;
        overflow: hidden;
    }
`;

export const Slider = styled.div`


    @media ${device.mobile} {
        position: relative;
        align-items: center;
        justify-content: center;
    }
`;

export const Slides = styled.div`


    @media ${device.mobile} {
        display: flex;
        transition: transform 0.5s ease-in-out;
        padding-left: 3%;
    }
`;

export const Slide = styled.div`


    @media ${device.mobile} {
        min-width: 100%;
        box-sizing: border-box;
    }
`;

export const ManualNavigation = styled.div`


    @media ${device.mobile} {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
    }
`;

export const NavButton = styled.button`


    @media ${device.mobile} {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
`;