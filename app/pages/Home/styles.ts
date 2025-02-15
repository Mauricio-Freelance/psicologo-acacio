import COLORS from "@/styles/colors";
import { SIZES } from "@/styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: red;
    min-height: 110vh;
    min-width: 100vw;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15%;
    margin-top: 10%;
`;

export const TextContainer = styled.div`
    display: grid;
    gap: 30px;
    max-width: 60vh;
`;

export const Text = styled.p`
    font-size: ${SIZES.label};
    width: 100%;
    color: ${COLORS.primary};
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

