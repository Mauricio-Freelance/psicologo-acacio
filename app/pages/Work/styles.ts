import styled from "styled-components";
import { SIZES } from "@/styles/fonts";
import COLORS from "@/styles/colors";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${COLORS.primary};
    min-height: 100vh;
    width: 100vw;
    top: 0;
`

export const Title = styled.h1`
    color: white;
    margin-top: 4%;
    font-size: ${SIZES.title};
    overflow: hidden;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    margin-top: 3%;
    background-color: black;
    overflow: hidden;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    margin: 30px;
    width: 42.5vw;
    height: 60vh;
    border-radius: 20px;
`

export const CardTitle = styled.h2`
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    margin-top: 4%;
    text-align: center;
    width: 70%;
`