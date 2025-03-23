import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes/index";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    background-color: ${COLORS.primary};
    padding-bottom: 3%;


    @media ${device.desktop} {
        min-height: 86vh;
    }
`

export const Title = styled.h1`
    margin-top: 4%;
    font-size: ${SIZES.title};
    text-align: center;
    color: ${COLORS.white};
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7%;
    margin-right: 12%;
    gap: 30px;


    @media ${device.mobile} {
        margin-right: 0%;
        margin-top: 20%;
        gap: 40px;
    }
`

export const Text = styled.h2`
    font-size: ${SIZES.subTitle};
    text-align: center;
    color: ${COLORS.white};
`

export const ButtonContainer = styled.div`
    margin-left: 13%;
    margin-top: -20px;


    @media ${device.mobile} {
        margin-left: 10%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 4%;

    
    @media ${device.desktop} {
        height: 65vh;
    }
`