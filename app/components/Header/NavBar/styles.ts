import styled from "styled-components";
import { FONTS, SIZES, WEIGHTS } from "../../../styles/fonts";
import COLORS from "../../../styles/colors";
import { device } from "@/styles/mediaSizes";

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} {
        height: auto; // Ajuste a altura para auto
        width: 100%; // Ocupa toda a largura do NavContainer
        flex-direction: column; // Altera para coluna em dispositivos móveis
        background-color: red;
        padding: 10px 0; // Adicione padding para espaçamento
    }
`; 

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 50px;
    list-style: none;
    align-items: center;
    justify-content: space-around;


    @media ${device.mobile} {
        gap: 10px;
        flex-direction: column; // Altera para coluna em dispositivos móveis
        width: 100%; // Ocupa toda a largura do NavContainer
    }
`;

export const ListItem = styled.li`
    position: relative;
    cursor: pointer;
    font-size: ${SIZES.char};
    font-weight: ${WEIGHTS.bold};
    font-family: ${FONTS.primary};
    color: ${COLORS.black};
    transition: color 0.3s;
    &:hover {
        color: ${COLORS.gray};
    }


    @media ${device.mobile} {
        width: 100%; // Ocupa toda a largura do NavContainer
        font-size: ${SIZES.charMobile};
        text-align: center; // Centraliza o texto
        padding: 5px 0; // Adicione padding para espaçamento
    }
`;

export const Link = styled.span`
    text-decoration: none;
    color: inherit;
`;
