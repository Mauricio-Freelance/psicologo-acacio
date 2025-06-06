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
    padding-bottom: 4%;
    padding-top: 4%;


    @media ${device.mobile} {
        flex-direction: column;
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
    max-width: 39vw;


    @media ${device.desktop} {
        max-width: 42vw;
    }

    
    @media ${device.mobile} {
        max-width: 80vw;
    }
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
    margin-top: 4%;
    margin-right: -25%;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 3%;
`;
