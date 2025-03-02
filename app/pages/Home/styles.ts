import COLORS from "@/styles/colors";
import { SIZES } from "@/styles/fonts";
import styled from "styled-components";
import { WEIGHTS } from "@/styles/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 110vh;
    min-width: 100vw;
    @media screen and (min-width: 1200px) and (max-width: 1280px) and (min-height: 800px) and (max-height: 850px){
        min-height: 80vh;
    }
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
    max-width: 65vh;
    @media screen and (max-width: 1280px) and (min-height: 800px) and (max-height: 850px){
        max-width: 30vw;
    }
`;

export const Text = styled.p`
    font-size: ${SIZES.label};
    width: 100%;
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 3%;
`;

