import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    /* min-height: 140vh; */
    top: 0;
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        /* min-height: 95vh; */
    } 
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 6vh;
    min-width: 70vw;
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
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    width: 55vw;
    margin-top: 5%;
    margin-right: 25%;
    margin-bottom: 3%;
    border: 4px solid ${COLORS.primary};
    border-radius: 20px;
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
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
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        gap: 12.5px;
        margin-top: 4%;
    }
`

export const ListText = styled.li`
    font-size: ${SIZES.label};
    &::before {
    content: "•"; /* Adiciona o ponto */
    font-size: ${SIZES.subTitle}; /* Ajusta o tamanho do ponto */
  }
`

export const Text = styled.h2`
    font-size: ${SIZES.char};
    margin-top: 20px;
    width: 60%;
    margin-left: 8%;
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        width: 70%;
    }
`

export const ButtonContainer = styled.div`
    width: 23%;
    margin-top: 4%;
    margin-left: 25%;
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        margin-top: 1%;
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
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        height: 55vh;
        margin-top: 20%;
        margin-left: 40%;
    }
`