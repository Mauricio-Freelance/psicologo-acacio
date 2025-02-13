import styled from "styled-components";
import { SIZES } from "@/styles/fonts";
import COLORS from "@/styles/colors";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${COLORS.primary};
    height: 120vh;
    width: 100vw;
`

export const Title = styled.h1`
    color: white;
    margin-top: 4%;
    font-size: ${SIZES.title};
    overflow: hidden;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    width: 100vw;
    margin-top: 4%;
    background-color: black;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    margin: 30px;
    width: 45vw;
    height: 75vh;
    border-radius: 20px;
`

export const CardTitle = styled.h2`
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    margin-top: 4%;
    text-align: center;
    width: 70%;
`