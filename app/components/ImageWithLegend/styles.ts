import styled from "styled-components";
import { SIZES } from "@/styles/fonts";
import COLORS from "@/styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const Image = styled.img`
    display: flex;
    position: relative;
    width: 75vh;
    height: 100%;
    clip-path: inset(0 0 24px 0);
`;

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color:${COLORS.primary};
    width: 100%;
    height: 50px;
`;

export const LegendText = styled.p`
    font-size: ${SIZES.char};
    color: white;
    word-wrap: break-word;
    width: 70%;
    text-align: center;
`;