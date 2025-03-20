import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes";
import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    z-index: 9999;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);

    @media ${device.mobile} {
        max-height: 100px; // Altura automática para mobile
        flex-direction: column; // Altera para coluna
    }
`;

export const Content = styled.div`
    display: flex;
    background-color: ${COLORS.white};
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;


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
        overflow: hidden;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px;
        position: relative;
    }
`;