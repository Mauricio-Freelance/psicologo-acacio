import styled from "styled-components";
import { SIZES } from "@/styles/fonts";
import COLORS from "@/styles/colors";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${COLORS.primary};
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        min-height: 123vh;
    }
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
    width: 100vw;
    margin-top: 3%;
    overflow: hidden;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLORS.secundary};
    margin: 30px;
    width: 42.5vw;
    height: 55vh;
    border-radius: 20px;
    @media screen and (min-width: 1200px) and (max-width: 1280px){
        height: auto;
        padding-bottom: 4%;
    }
`

export const CardTitle = styled.h2`
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    margin-top: 5%;
    text-align: center;
    width: 70%;
`

export const CardContent = styled.h2`
   text-align: center;
   width: 40%;
   margin-top: 7%;
   @media screen and (min-width: 1200px) and (max-width: 1280px) {
        width: 45%;
        margin-top: 10%;
    }
`