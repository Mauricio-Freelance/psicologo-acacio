import styled from "styled-components";
import { SIZES } from "@/styles/fonts";
import COLORS from "@/styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75vh;
`;

export const Image = styled.img`
    display: flex;
    position: absolute;
    width: 75vh;
    height: 100%;
    clip-path: inset(0 0 24px 0);
`;

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color:${COLORS.primary};
    bottom: 0%;
    width: 33.3%;
    height: 50px;
`;

export const LegendText = styled.p`
    font-size: ${SIZES.char};
    color: white;
    word-wrap: break-word;
    width: 70%;
    text-align: center;
`;