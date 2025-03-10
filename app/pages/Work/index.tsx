import * as S from "./styles";
import cardsData from "../../constants/cardsData.json"
import { work } from "@/constants/routes";
import { CardsData, /* Card */ } from "../../constants/types"; // Importe as interfaces
import Section from "@/components/Section";
import React from "react";

// Forçar a tipagem do JSON
const typedCardsData: CardsData = cardsData;

const WorkPage: React.FC = () => {
    const workCards = typedCardsData.Work;

    return (
        <Section id={work}>
            <S.Container>
                <S.Title> Meu Trabalho Baseia-se Em: </S.Title>
                <S.CardsContainer>
                    {workCards.map((card, index) => (
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