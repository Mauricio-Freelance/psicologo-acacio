import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${COLORS.primary};
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 35%;
    margin-top: 14%;
    gap: 30px;
`

export const Text = styled.p`
    font-size: ${SIZES.subTitle};
    text-align: center;
    color: ${COLORS.white};
`