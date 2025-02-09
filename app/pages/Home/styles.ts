import COLORS from "@/styles/colors";
import { SIZES } from "@/styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;

`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: yellow;
    gap: 30px;
    margin-left: 10%;
    margin-right: 10%;
`;

export const Text = styled.p`
    font-size: ${SIZES.title};
    background-color: purple;
    color: ${COLORS.primary};
`;

export const ImageContainer = styled.div`

`;

