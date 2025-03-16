import * as S from "./styles";
import { benefits } from "@/constants/routes";
import cardsData from "../../constants/cardsData.json";
import { CardsData, BenefitsCard } from "../../constants/types";
import ICONS from "@/assets/icons";
import Section from "@/components/Section";
import Slider from "@/components/Slider"; // Importe o Slider

const typedCardsData = cardsData as CardsData;

const BenefitsPage: React.FC = () => {
    const benefitsCards = typedCardsData.Benefits;

    // Dividir os cards
    const firstThreeCards = benefitsCards.slice(0, 3); // Primeiros 3 cards
    const lastThreeCards = benefitsCards.slice(3); // Últimos 3 cards

        // Mapear os cards para o formato do Slider
        const firstThreeSlides = firstThreeCards.map((card: BenefitsCard, index) => (
            <S.Card key={index}>
                <S.CardIcon src={ICONS[card.icon]} alt={card.alt} />
                <S.CardText style={card.style || {}}>{card.text}</S.CardText>
            </S.Card>
        ));
    
        const lastThreeSlides = lastThreeCards.map((card: BenefitsCard, index) => (
            <S.Card key={index}>
                <S.CardIcon src={ICONS[card.icon]} alt={card.alt} />
                <S.CardText style={card.style || {}}>{card.text}</S.CardText>
            </S.Card>
        ));

    return (
        <Section id={benefits}>
            <S.Container>
                <S.Title> Benefícios da terapia online </S.Title>
                <S.Subtitle> Conveniência e Acessibilidade </S.Subtitle>
                <S.CardsContainer>
                    {firstThreeCards.map((card: BenefitsCard, index) => (
                        <S.Card key={index}>
                            <S.CardIcon src={ICONS[card.icon]} alt={card.alt} />
                            <S.CardText style={card.style || {}}>
                                {card.text}
                            </S.CardText>
                        </S.Card>
                    ))}
                </S.CardsContainer>

                <Slider page="benefits" cards={firstThreeSlides}/>

                <S.Subtitle> Conforto e Privacidade </S.Subtitle>
                <S.CardsContainer>
                    {lastThreeCards.map((card: BenefitsCard, index) => (
                        <S.Card key={index}>
                            <S.CardIcon src={ICONS[card.icon]} alt={card.alt} />
                            <S.CardText style={card.style || {}}>
                                {card.text}
                            </S.CardText>
                        </S.Card>
                    ))}
                </S.CardsContainer>

            <Slider page="benefits" cards={lastThreeSlides}/>
               
            </S.Container>
        </Section>
    );
};

export default BenefitsPage;