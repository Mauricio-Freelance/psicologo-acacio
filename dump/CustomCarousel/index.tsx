import * as S from "./styles";
import React, { useState, ReactNode } from "react";

interface CustomCarouselProps {
    children: ReactNode;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    };

    return (
        <S.Container>
            <S.Content
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => (
                    <S.Slide key={index}>
                        {child}
                    </S.Slide>
                ))}
            </S.Content>
            <S.Button style={{
                marginLeft: "10px",
            }}
            onClick={prevSlide}>
                
            </S.Button>
            <S.Button style={{
                marginRight: "10px",
            }}
            onClick={nextSlide}>
                
            </S.Button>
            <S.Dots>
                {React.Children.map(children, (_, index) => (
                    <S.Dot
                        key={index}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </S.Dots>
        </S.Container>
    );
};

export default CustomCarousel;