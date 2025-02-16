import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    margin-top: 3%;
    background-color: ${COLORS.primary};
`

export const Title = styled.h1`
    margin-top: 4%;
    color: ${COLORS.white};
    font-size: ${SIZES.title};
`

export const Subtitle = styled.h2`
    margin-top: 5%;
    color: ${COLORS.white};
    font-size: ${SIZES.subTitle};
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 70vh;
    width: 100vw;
    margin-top: 1%;
    background-color: ${COLORS.primary};
    overflow: hidden;

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLORS.secundary};
    margin: 20px;
    width: 30vw;
    height: 65vh;
    border-radius: 20px;
`

export const CardIcon = styled.img`
    margin-top: 10%;
    width: 80px;
    height: auto;
`

export const CardText = styled.h2`
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    margin-top: 8%;
    width: 65%;
    text-align: center;
`