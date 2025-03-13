import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes/index";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    top: 0;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 6vh;
    width: 70vw;
    align-items: center;
    justify-content: center;
    margin-top: 4%;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLORS.primary};
  margin: 5px;
`;

export const Title = styled.h1`
    color: ${COLORS.primary};
    font-size: ${SIZES.title};


    @media ${device.mobile} {
        font-size: ${SIZES.titleMobile};
        text-align: center;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: auto;
    width: 55vw;
    margin-top: 5%;
    margin-right: 25%;
    margin-bottom: 3%;
    border: 4px solid ${COLORS.primary};
    border-radius: 20px;


    @media ${device.mobile} {
        width: 90vw;
        margin: 2%;
        min-height: 0vh;
    }


    @media ${device.desktop} {
        min-height: 68vh;
        width: 50vw;
    }
`

export const SubTitle = styled.h2`
    display: flex;
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    align-self: center;
    margin-top: 4%;
`

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 33vw;
    margin-left: 12%;
    padding-top: 3%;


    @media ${device.mobile} {
        width: 80vw;
        margin-left: 7%;
        gap: 12px;
    }


    @media ${device.desktop} {
        gap: 12.5px;
        margin-top: 4%;
        padding-top: 0%;
    }
`

export const ListText = styled.li`
    font-size: ${SIZES.label};


    @media ${device.mobile} {
        font-size: ${SIZES.labelMobile};
    }


    &::before {
    content: "•"; /* Adiciona o ponto */
    font-size: ${SIZES.subTitle}; /* Ajusta o tamanho do ponto */


    @media ${device.mobile} {
        font-size: ${SIZES.subTitleMobile};
    }
  }
`

export const Text = styled.h2`
    font-size: ${SIZES.char};
    margin-top: 20px;
    width: 60%;
    margin-left: 8%;


    @media ${device.mobile} {
        width: 80%;
        font-size: ${SIZES.labelMobile};
        text-align: center;
    }

    @media ${device.desktop} {
        width: 70%;
    }
`

export const ButtonContainer = styled.div`
    width: 23%;
    margin-left: 20%;
    padding-bottom: 3%;


    @media ${device.mobile} {
        width: 42%;
        margin-left: 25%;
    }


    @media ${device.desktop} {
        margin-top: 1%;
        margin-left: 27.5%;
        width: 26%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 17%;
    margin-left: 45%;


    @media ${device.desktop} {
        height: 55vh;
        margin-top: 20%;
        margin-left: 40%;
    }
`