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
    display: flex;
    align-items: center;

    @media ${device.mobile} {
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        transform: ${({ isMenuOpen }) => 
            isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
        visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
    }
`;