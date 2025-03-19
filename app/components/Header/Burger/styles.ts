import styled from "styled-components";
import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes";

export const Container = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-right: 15px;


    @media ${device.mobile} {
        display: flex;
    }
`;

export const BurgerMenu = styled.div`
    display: none; // Esconde o burger menu em telas maiores
    flex-direction: column;
    cursor: pointer;

    @media ${device.mobile} {
        display: flex;
    }
`;

export const BurgerLine = styled.div`
    width: 25px;
    height: 3px;
    background-color: ${COLORS.black};
    margin: 4px 0;
`;

export const NavContainer = styled.div<{ isMenuOpen: boolean }>`
    align-items: center;

    @media ${device.mobile} {
        display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
        flex-direction: column;
        position: static; // Alterado para absolute mas aparece se for static
        top: 100%; // Posiciona o menu abaixo do ícone do burger
        left: 0;
        width: 100%;
        background-color: ${COLORS.white}; // Adicione um fundo para garantir visibilidade
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        transform: ${({ isMenuOpen }) => 
            isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
        visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
        z-index: 1000; // Garante que o menu apareça acima de outros elementos
    }
`;