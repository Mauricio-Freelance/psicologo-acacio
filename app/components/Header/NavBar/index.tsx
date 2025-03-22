import { useEffect, useState } from "react";
import * as S from "./styles";
import COLORS from "@/styles/colors";
import ICONS from "@/assets/icons";
import {
    about, 
    benefits,
    contact,
    faq,
    home,
    work,
} from "@/constants/routes";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu state:", !isMenuOpen); // Verifique no console
    };

    const [route, setRoute] = useState(`/${home}`);

    const handleClick = (newRoute: string) => {
        setRoute(newRoute);

        // Rola suavemente até a seção correspondente
        const sectionId = newRoute.replace("/", ""); // Remove a barra para obter o ID da seção
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    };

        // Função para verificar a seção visível
    // Função para verificar a seção visível
    const checkVisibleSection = () => {
        const sections = [home, work, about, benefits, faq, contact];
        let currentSection = home; // Define a seção padrão como "home"

        // Verifica qual seção está visível na tela
        for (const section of sections) {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) { // 100 é um offset para considerar o cabeçalho
                    currentSection = section;
                    break;
                }
            }
        }
        // Atualiza a rota ativa
        setRoute(`/${currentSection}`);
    };

    // Função debounce
    const debounce = (func: Function, wait: number) => {
        let timeout: ReturnType<typeof setTimeout>;
        return function (...args: any[]) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(null, args), wait);
        };
    };

    useEffect(() => {
        // Verifica a seção visível ao carregar a página
        checkVisibleSection();

        // Cria uma versão debounce da função checkVisibleSection
        const debouncedCheckVisibleSection = debounce(checkVisibleSection, 0);

        // Adiciona o listener de scroll com debounce
        window.addEventListener("scroll", debouncedCheckVisibleSection);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", debouncedCheckVisibleSection);
        };
    }, []); // O array vazio garante que o useEffect só seja executado uma vez


    return (
        <S.Container>
            <S.BurgerMenu onClick={toggleMenu} src={isMenuOpen ? ICONS.close: ICONS.burger} alt="Menu" />
            <S.List isMenuOpen={isMenuOpen}>
                <S.ListItem onClick={() => handleClick(`/${home}`)}>
                    <S.Link 
                        style={{ color: route === `/${home}` ? COLORS.primary : "inherit" }}>
                        Home
                    </S.Link>
                </S.ListItem>

                <S.ListItem onClick={() => handleClick(`/${work}`)}>
                    <S.Link style={{ color: route === `/${work}` ? COLORS.primary : "inherit" }}>
                        Meu Trabalho
                    </S.Link>
                </S.ListItem>

                <S.ListItem onClick={() => handleClick(`/${about}`)}>
                    <S.Link style={{ color: route === `/${about}` ? COLORS.primary : "inherit" }}>
                        Sobre
                    </S.Link>
                </S.ListItem>

                <S.ListItem onClick={() => handleClick(`/${benefits}`)}>
                    <S.Link style={{ color: route === `/${benefits}` ? COLORS.primary : "inherit" }}>
                        Benefícios
                    </S.Link>
                </S.ListItem>

                <S.ListItem onClick={() => handleClick(`/${faq}`)}>
                    <S.Link style={{ color: route === `/${faq}` ? COLORS.primary : "inherit" }}>
                        FAQ
                    </S.Link>
                </S.ListItem>

                <S.ListItem onClick={() => handleClick(`/${contact}`)}>
                    <S.Link style={{ color: route === `/${contact}` ? COLORS.primary : "inherit" }}>
                        Contatos
                    </S.Link>
                </S.ListItem>

            </S.List>
        </S.Container>
    );
};

export default NavBar;