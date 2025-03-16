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
    }
`;

export const Slide = styled.div`


    @media ${device.mobile} {
        min-width: 100vw;
        box-sizing: border-box;
        margin-left: 10%;
    }
`;

export const ManualNavigation = styled.div`


    @media ${device.mobile} {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        width: 99%;
        margin-left: 2px;
        transform: translateY(-50%);
    }
`;

export const NavButton = styled.button`


    @media ${device.mobile} {
        cursor: pointer;
        border: none;
        margin: 10px;

        img {
        width: 24px; // Ajuste o tamanho da seta
        height: 35px; // Ajuste o tamanho da seta
        }
    }
`;