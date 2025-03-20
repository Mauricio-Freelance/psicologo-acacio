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

    @media ${device.mobile} {
        position: relative;
        width: 20%; // Ocupa toda a largura do NavContainer
        flex-direction: column; // Altera para coluna em dispositivos móveis
        padding: 10px 0; // Adicione padding para espaçamento
    }
`; 

export const BurgerMenu = styled.img`
    display: none; // Esconde o burger menu em telas maiores

    @media ${device.mobile} {
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


    @media ${device.mobile} {
        gap: 10px;
        flex-direction: column; // Altera para coluna em dispositivos móveis
        width: 100%; // Ocupa toda a largura do NavContainer

        display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
        position: ${({ isMenuOpen }) => (isMenuOpen ? "absolute" : "relative")};; // Alterado para absolute mas aparece se for static
        top: 100%; // Deveria posicionar o menu abaixo do ícone do burger
        left: 0;
        background-color: ${COLORS.white}; // Adicione um fundo para garantir visibilidade
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        transform: ${({ isMenuOpen }) => isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
        z-index: 1000; // Garante que o menu apareça acima de outros elementos
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
