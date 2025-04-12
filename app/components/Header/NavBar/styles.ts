import styled from "styled-components";
import { FONTS, SIZES, WEIGHTS } from "../../../styles/fonts";
import COLORS from "../../../styles/colors";
import { device } from "@/styles/mediaSizes";


// Defina a interface para as props do componente List
interface ListProps {
    isMenuOpen: boolean;
  }
  

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        position: relative;
        width: 20%; // Ocupa toda a largura do NavContainer
        flex-direction: column; // Altera para coluna em dispositivos móveis
        overflow: hidden;
    }
`; 

export const BurgerMenu = styled.img`
    display: none; // Esconde o burger menu em telas maiores


    @media (max-width: 1000px) {
        display: flex;
        cursor: pointer;
    }
`;

export const List = styled.ul<ListProps>`
    display: flex;
    flex-direction: row;
    gap: 50px;
    list-style: none;
    align-items: center;
    justify-content: space-around;


    @media (max-width: 1000px) {
        gap: 10px;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column; // Altera para coluna em dispositivos móveis
        min-width: ${({ isMenuOpen }) => (isMenuOpen ? "auto" : "0px")};
        height: ${({ isMenuOpen }) => (isMenuOpen ? "auto" : "0px")};
        visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
        position: ${({ isMenuOpen }) => (isMenuOpen ? "static" : "relative")};
        top: 100%; // Deveria posicionar o menu abaixo do ícone do burger
        left: 0;
        background-color: ${COLORS.white}; // Adicione um fundo para garantir visibilidade
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        transform: ${({ isMenuOpen }) => isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    }


    @media ${device.tablet} {
        gap: 30px;
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
        border-top: 1px solid black;
        width: 100%; // Ocupa toda a largura do NavContainer
        font-size: ${SIZES.labelMobile};
        text-align: center; // Centraliza o texto
        padding: 10px 10px; // Adicione padding para espaçamento
    }


    
    @media ${device.tablet} {
        font-size: ${SIZES.labelMobile};
    }
`;

export const Link = styled.span`
    text-decoration: none;
    color: inherit;
`;
