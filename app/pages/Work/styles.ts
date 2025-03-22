import styled from "styled-components";
import { device } from "@/styles/mediaSizes/index";
import COLORS from "@/styles/colors";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${COLORS.primary};

    @media ${device.mobile} {
        width: 100vw;
    }
`

export const Title = styled.h1`
    color: white;
    margin-top: 4%;
    font-size: ${SIZES.title};
    overflow: hidden;
    @media ${device.mobile} {
        font-size: ${SIZES.sectionMobile};
        text-align: center;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 3%;
    overflow: hidden;


    @media ${device.mobile} {
        display: none;
    }
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


    @media ${device.mobile} {
        height: auto;
        width: 70vw;
        margin: 20px;
    }

    
    @media ${device.desktop}{
        max-height: 45vh;
    }
`

export const CardTitle = styled.h2`
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    margin-top: 5%;
    text-align: center;
    width: 70%;
    @media ${device.mobile} {
        font-size: ${SIZES.subTitleMobile};
    }
`

export const CardContent = styled.h2`
   text-align: center;
   width: 40%;
   margin-top: 7%;


   @media ${device.mobile} {
        font-size: ${SIZES.labelMobile};
        width: 60%;
        padding-bottom: 8%;
    }


    @media ${device.desktop}{
        width: 45%;
        margin-top: 10%;
    }
`