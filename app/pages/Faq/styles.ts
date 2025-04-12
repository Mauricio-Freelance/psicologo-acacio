import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes/index";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
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


    @media ${device.mobile} {
        width: 95vw;
    }
`

export const QuestionText = styled.h2`
    font-size: ${SIZES.subTitle};
    color: ${COLORS.primary};
    margin-left: 5px;


    @media ${device.mobile} {
        width: 85%;
        font-size: ${SIZES.titleMobile};
    }
`

export const Answer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-height: 10vh;
    justify-content: center;
    background-color: ${COLORS.primary};
    padding-left: 30px;


    @media ${device.mobile} {
        width: 95vw;
    }
`

export const AnswerText = styled.h2`
    font-size: ${SIZES.label};
    color: ${COLORS.white};
    width: 95%;
    margin-top: 1%;


    @media ${device.mobile} {
        font-size: ${SIZES.char};
    }
`

export const ButtonContainer = styled.div`
    margin-bottom: 15px;
    margin-top: -1.6rem;
    margin-left: -11rem;
    width: 100%;


    @media ${device.mobile} {
        margin-top: -0.5rem;
        margin-left: -3.5rem;
    }
`