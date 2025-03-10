import * as S from "./styles";
import cardsData from "../../constants/cardsData.json"
import { CardProps } from "../../constants/types"; // Importe o tipo
import { work } from "@/constants/routes";
import Section from "@/components/Section";
import React from "react";


const WorkPage: React.FC = () => {
    // Use o tipo CardProps para garantir a tipagem correta
    const typedCardsData: CardProps[] = cardsData;

    return (
        <Section id={work}>
            <S.Container>
                <S.Title> Meu Trabalho Baseia-se Em: </S.Title>
                <S.CardsContainer>
                    {typedCardsData.map((card, index) => (
                        <S.Card key={index}>
                            <S.CardTitle>{card.title}</S.CardTitle>
                            <S.CardContent style={card.style || {}}>
                                {card.content}
                            </S.CardContent>
                        </S.Card>
                    ))}
                </S.CardsContainer>
            </S.Container>
        </Section>
    );
};


export default WorkPage;