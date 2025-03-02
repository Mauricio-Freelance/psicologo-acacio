import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;
    min-height: 110vh;
    min-width: 100vw;
    background-color: ${COLORS.primary};
    @media screen and (min-width: 1200px) and (max-width: 1280px) and (min-height: 800px) and (max-height: 850px){
        min-height: 82vh;
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
`

export const Text = styled.h2`
    font-size: ${SIZES.subTitle};
    text-align: center;
    color: ${COLORS.white};
`

export const ButtonContainer = styled.div`
    margin-left: 13%;
    margin-top: -20px;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 4%;
    @media screen and (min-width: 1200px) and (max-width: 1280px) and (min-height: 800px) and (max-height: 850px){
        height: 55vh;
    }
`