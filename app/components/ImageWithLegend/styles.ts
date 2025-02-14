import styled from "styled-components";
import { SIZES } from "@/styles/fonts";
import COLORS from "@/styles/colors";

export const Container = styled.div`
    position: inline-block;
`;

export const Image = styled.img`
    display: flex;
    position: absolute;
    width: 75vh;
    height: 100%;
    margin-left: -600px;
    margin-top: 4%;
    clip-path: inset(0 0 19px 0);
`;

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -44.5%;
    margin-top: 43.2%;
    background-color:${COLORS.primary};;
    width: 33.3%;
    height: 50px;
    overflow: hidden;
`;

export const LegendText = styled.p`
    font-size: ${SIZES.char};
    color: white;
    word-wrap: break-word;
    width: 70%;
    text-align: center;
`;