import styled from "styled-components";
import COLORS from "@/styles/colors";
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
    min-width: 55vw;
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