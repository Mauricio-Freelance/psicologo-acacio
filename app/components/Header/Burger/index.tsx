import { useState } from "react";
import NavBar from "../NavBar";
import * as S from "./styles";

const Burger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu state:", !isMenuOpen); // Verifique no console
    };

    return (
        <S.Container>
            {/* Ícone do Burger Menu */}
            <S.BurgerMenu onClick={toggleMenu}>
                <S.BurgerLine />
                <S.BurgerLine />
                <S.BurgerLine />
            </S.BurgerMenu>

            {/* NavBar dentro do Burger Menu (visível apenas em resoluções menores) */}
            <S.NavContainer isMenuOpen={isMenuOpen}>
                <NavBar />
            </S.NavContainer>
        </S.Container>
    );
};

export default Burger;