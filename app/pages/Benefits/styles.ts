import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes/index";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 203vh;
    min-width: 100vw;
    top: 0;
    background-color: ${COLORS.primary};

    
    @media ${device.desktop} {
        min-height: 145vh;
    }
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


    @media ${device.desktop} {
        margin-top: 3%;
    }
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
    padding-bottom: 1%;


    @media ${device.desktop} {
        min-height: 50vh;
    }
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
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);


    @media ${device.desktop} {
        height: 50vh;
    }
`

export const CardIcon = styled.img`
    margin-top: 10%;
    width: 80px;
    height: auto;
`

export const CardText = styled.h2`
    color: ${COLORS.primary};
    font-size: ${SIZES.label};
    margin-top: 12%;
    width: 50%;
    text-align: center;
`