import { useState } from "react";
import * as S from "./styles";
import COLORS from "../../../styles/colors";

const NavBar = () => {
    const [route, setRoute] = useState("/");

    const handleClick = (newRoute: string) => {
        setRoute(newRoute);
    };

    return (
        <S.Container>
            <S.List>
                <S.ListItem onClick={() => handleClick("/")}>
                    <S.Link style={{ color: route === "/" ? COLORS.primary : "inherit" }}>Home</S.Link>
                </S.ListItem>
                <S.ListItem onClick={() => handleClick("/work")}>
                    <S.Link style={{ color: route === "/work" ? COLORS.primary : "inherit" }}>Meu Trabalho</S.Link>
                </S.ListItem>
                <S.ListItem onClick={() => handleClick("/about")}>
                    <S.Link style={{ color: route === "/about" ? COLORS.primary : "inherit" }}>About</S.Link>
                </S.ListItem>
                <S.ListItem onClick={() => handleClick("/benefits")}>
                    <S.Link style={{ color: route === "/benefits" ? COLORS.primary : "inherit" }}>Benefícios</S.Link>
                </S.ListItem>
                <S.ListItem onClick={() => handleClick("/faq")}>
                    <S.Link style={{ color: route === "/faq" ? COLORS.primary : "inherit" }}>FAQ</S.Link>
                </S.ListItem>
                <S.ListItem onClick={() => handleClick("/contacts")}>
                    <S.Link style={{ color: route === "/contacts" ? COLORS.primary : "inherit" }}>Contatos</S.Link>
                </S.ListItem>
            </S.List>
        </S.Container>
    );
};

export default NavBar;