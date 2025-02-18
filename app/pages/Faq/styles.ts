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

export const Title = styled.h1`
    margin-top: 4%;
    color: ${COLORS.primary};
    font-size: ${SIZES.title};
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 3%;
`

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 12vh;
    background-color: ${COLORS.softWhite};
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 2px 4px #07a8b044;
`

export const QuestionText = styled.h2`
    font-size: ${SIZES.subTitle};
    color: ${COLORS.primary};
`

export const Answer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
`

export const AnswerText = styled.h2`
    font-size: ${SIZES.label};
    color: ${COLORS.white};
`