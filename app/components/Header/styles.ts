import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes";
import styled from "styled-components";


export const Container = styled.div`
    display: inline-block;
`;

export const SubContainer = styled.header`
    z-index: 9999;
    position: fixed;
    background-color: ${COLORS.white};
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    height: 70px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);

    @media ${device.mobile} {
        max-height: 100px; // Altura automática para mobile
        flex-direction: column;
    }
`

export const Content = styled.div`
    display: flex;
    background-color: ${COLORS.white};
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 20px;
    position: relative;
    margin-left: 5%;


    @media (max-width: 1000px) {
        display: none;
    }
`;

export const ContentMobile = styled.div`
    display: none;


    @media (max-width: 1000px) {
        display: flex;
        background-color: ${COLORS.white};
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 90%;
        gap: 20px;
        padding: 20px;
        position: relative;
        margin-left: 10%;
    }
`;

export const BurgerContainer = styled.div`
    display: none;


    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: right;
        cursor: pointer;
        position: fixed;
        width: 100vw;
        height: auto;
        margin-top: 5px;
        margin-left: -80vw;
        z-index: 10000;
    }
`;