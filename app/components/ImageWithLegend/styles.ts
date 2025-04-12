import styled from "styled-components";
import { device } from "@/styles/mediaSizes";
import { SIZES } from "@/styles/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const Image = styled.img`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0px;
`;

export const LegendText = styled.p`
    font-size: ${SIZES.char};
    word-wrap: break-word;
    width: 70%;
    text-align: center;
`;