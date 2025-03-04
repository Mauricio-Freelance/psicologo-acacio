import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes/index";
import { SIZES } from "@/styles/fonts";
import styled from "styled-components";
import { WEIGHTS } from "@/styles/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    padding-bottom: 4%;
    padding-top: 4%;
    @media ${device.mobile} {
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
    @media ${device.mobile} {
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
    @media ${device.mobile} {
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
        @media ${device.mobile} {
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
    @media ${device.mobile} {
        display: none;
    }
`;

