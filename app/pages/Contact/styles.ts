import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4%;
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${COLORS.primary};
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15%;
    margin-top: 10%;
    gap: 30px;
`

export const Title = styled.h1`
    font-size: ${SIZES.title};
    text-align: center;
    color: ${COLORS.white};
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
    margin-top: 3%;
`