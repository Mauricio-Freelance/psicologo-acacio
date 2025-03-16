import * as S from "./styles";
import cardsData from "../../constants/cardsData.json"
import { CardsData, /* WorkCard */ } from "../../constants/types"; // Importe as interfaces
import { work } from "@/constants/routes";
import Section from "@/components/Section";
import React from "react";

// Forçar a tipagem do JSON
const typedCardsData = cardsData as CardsData;

const WorkPage: React.FC = () => {
    const workCards = typedCardsData.Work;

    const cardsArray = workCards.map((card, index) => (
        <S.Card key={index}>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardContent style={card.style || {}}>
                {card.content}
            </S.CardContent>
        </S.Card>
    ))

    return (
        <Section id={work}>
            <S.Container>
                <S.Title> Meu Trabalho Baseia-se Em: </S.Title>
                <S.CardsContainer>
                    {cardsArray}
                </S.CardsContainer>
            </S.Container>
        </Section>
    );
};


export default WorkPage;