import * as S from "./styles";
import React, { useState, useEffect } from "react";
import ICONS from "@/assets/icons";

interface SliderProps {
    page: "work" | "benefits";
    cards: React.ReactNode[];
}

const Slider = ({ cards }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Navegação automática
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % cards.length);
        }, 8000); // Troca de slide a cada 8 segundos

        return () => clearInterval(interval);
    }, [cards.length]);

    // Navegação manual
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <S.Container>
            <S.Slider>
                <S.Slides>
                    {cards.map((card, index) => (
                        <S.Slide key={index} style={{ display: index === currentSlide ? "block" : "none" }}>
                            {card}
                        </S.Slide>
                    ))}
                </S.Slides>

                <S.NavigationAuto>
                    {cards.map((_, index) => (
                        <S.AutoNavButton
                            key={index}
                            active={index === currentSlide}
                        />
                    ))}
                </S.NavigationAuto>

                <S.ManualNavigation>
                    <S.NavButton onClick={prevSlide} src={ICONS.leftArrowWhite} alt="Anterior" />

                    <S.NavButton onClick={nextSlide} src={ICONS.rightArrowWhite} alt="Próximo" />
                </S.ManualNavigation>
            </S.Slider>
        </S.Container>
    );
};

export default Slider;