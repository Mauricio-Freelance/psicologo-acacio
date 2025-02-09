import COLORS from "@/styles/colors";
import { SIZES } from "@/styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 15%;

`;

export const Text = styled.p`
    font-size: ${SIZES.subTitle};
    background-color: purple;
    width: 70%;
    color: ${COLORS.primary};
`;

export const ImageContainer = styled.div`

`;

