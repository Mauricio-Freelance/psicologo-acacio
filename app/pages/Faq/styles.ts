import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 103vh;
    min-width: 100vw;
    @media screen and (min-width: 1200px) and (max-width: 1280px) {
        min-height: 80vh;
    }
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
    border-radius: 10px;
    box-shadow: 0 2px 5px #07a8b044;
`

export const RightArrow = styled.img<{ isOpen: boolean }>`
    display: flex;
    width: 20px;
    height: 20px;
    margin-left: 15px;
    transform: rotate(${(props) => (props.isOpen ? "90deg" : "0deg")});
    transition: transform 0.3s ease-in-out;
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
    padding-left: 30px;
`

export const AnswerText = styled.h2`
    font-size: ${SIZES.label};
    color: ${COLORS.white};
    width: 95%;
    margin-top: 1%;
`

export const ButtonContainer = styled.div`
    margin-bottom: 15px;
    margin-top: 5px;
    margin-left: -10px;
    width: 16%;
`