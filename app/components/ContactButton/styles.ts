import COLORS from "@/styles/colors";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts"

interface ContactButtonProps {
    backgroundColor?: string;
    color?: string;
    marginLeft?: number;
    marginTop?: number;
}

export const Container = styled.div<ContactButtonProps>`
    display: flex;
    flex-direction: row;
    margin-left: ${({ marginLeft }) => marginLeft || 20}%;
    margin-top: ${({ marginTop }) => marginTop || 4}%;
    gap: 5px;
    cursor: pointer;
    background-color: ${({ backgroundColor }) => backgroundColor || COLORS.primary};
    width: 130px;
    height: 40px;
    color: ${({ color }) => color || COLORS.white};
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