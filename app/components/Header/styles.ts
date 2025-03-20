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
        flex-direction: column; // Altera para coluna
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


    @media ${device.mobile} {
        display: none;
    }
`;

export const Swapper = styled.div`
    display: none;


    @media ${device.mobile} {
        display: flex;
        background-color: ${COLORS.white};
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 80%;
        padding: 20px;
        position: relative;
        margin-left: 10%;
    }
`;

export const BurgerContainer = styled.div`
    display: none;


    @media ${device.mobile} {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        background-color: transparent;
        position: fixed;
        width: 60vw;
        height: 35vh;
        margin-top: 5px;
        margin-left: 10px;
        z-index: 10000;
    }
`;