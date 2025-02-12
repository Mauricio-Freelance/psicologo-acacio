import COLORS from "@/styles/colors";
import { SIZES } from "@/styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    height: 120vh;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14%;
`;

export const TextContainer = styled.div`
    display: grid;
    gap: 30px;
    margin-left: 14%;
`;

export const Text = styled.p`
    font-size: ${SIZES.label};
    width: 30%;
    color: ${COLORS.primary};
`;

export const ImageContainer = styled.div`
    display: flex;
    margin-top: 3%;
`;

