import styled from "styled-components";
import { SIZES } from "@/styles/fonts";

export const Container = styled.div`
`;

export const Image = styled.img`
    display: flex;
    position: absolute;
    width: 75vh;
    height: 100%;
    margin-left: -600px;
    margin-top: 4%;
`;

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #07a8b0;
`;

export const LegendText = styled.p`
    font-size: ${SIZES.char};

    position: absolute;
    margin-left: -750px;
    margin-top: 92%;
`;