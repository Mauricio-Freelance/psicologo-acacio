import styled from "styled-components";
import { SIZES } from "@/styles/fonts"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    margin-top: 3%;
    cursor: pointer;
    background-color: #07a8b0;
    width: 130px;
    color: white;
    border-radius: 5%;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: ${SIZES.char};
`;