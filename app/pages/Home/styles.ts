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
    @media screen and (min-width: 400px) and (max-width: 450px) {
        min-height: 60vh;
    }

    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        min-height: 80vh;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15%;
    margin-top: 10%;
    @media screen and (min-width: 400px) and (max-width: 450px) {
        margin: 10%;
        margin-top: 25%;
    }
`;

export const TextContainer = styled.div`
    display: grid;
    gap: 30px;
    max-width: 65vh;
`;

export const Text = styled.p`
    font-size: ${SIZES.label};
    width: 100%;
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
    @media screen and (min-width: 400px) and (max-width: 450px) {
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
    @media screen and (min-width: 400px) and (max-width: 450px) {
        margin-left: 10%;
        margin-top: 4%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 3%;
    @media screen and (min-width: 400px) and (max-width: 450px) {
        display: none;
    }
`;

