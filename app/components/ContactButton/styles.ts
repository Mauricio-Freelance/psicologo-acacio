import styled from "styled-components";
import { SIZES } from "@/styles/fonts"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20%;   
    margin-top: 4%;
    gap: 5px;
    cursor: pointer;
    background-color: #07a8b0;
    width: 130px;
    height: 40px;
    color: white;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: ${SIZES.char};
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;