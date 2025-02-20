import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 105vh;
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

export const QAContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px #07a8b044;
`

export const Question = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 12vh;
    background-color: ${COLORS.softWhite};
    align-items: center;
    cursor: pointer;
`

export const RightArrow = styled.img`
    display: flex;
    width: 20px;
    height: 20px;
    margin-left: 15px;
`

export const QuestionText = styled.h2`
    font-size: ${SIZES.subTitle};
    color: ${COLORS.primary};
    margin-left: 10px;
`

export const Answer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-height: 10vh;
    justify-content: center;
    background-color: ${COLORS.primary};
`

export const AnswerText = styled.h2`
    font-size: ${SIZES.label};
    color: ${COLORS.white};
    width: 95%;
    margin-top: 1%;
`