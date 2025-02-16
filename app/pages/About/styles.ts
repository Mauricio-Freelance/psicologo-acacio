import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
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
    border: 4px solid ${COLORS.primary};
    border-radius: 20px;
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
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 10%;
    margin-left: 45%;   
`