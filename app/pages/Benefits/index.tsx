import * as S from "./styles";
import { benefits } from "@/constants/routes";
import cardsData from "../../constants/cardsData.json"
import { CardsData, BenefitsCard } from "../../constants/types";
import ICONS from "@/assets/icons";
import Section from "@/components/Section";


const typedCardsData: CardsData = cardsData;


const BenefitsPage: React.FC = () => {
    const benefitsCards = typedCardsData.Benefits;

    return (
        <Section id={benefits}>
            <S.Container>
                <S.Title> Benefícios da terapia online </S.Title>
                <S.Subtitle> Conveniência e Acessibilidade </S.Subtitle>
                <S.CardsContainer>
                    {benefitsCards.map((card: BenefitsCard, index) => (
                        <S.Card key={index}>
                            <S.CardIcon src={ICONS[card.icon]} alt={card.alt} />
                            <S.CardText style={card.style || {}}>
                                {card.text}
                            </S.CardText>
                        </S.Card>
                    ))}
                </S.CardsContainer>
                <S.Subtitle> Conforto e Privacidade </S.Subtitle>
                <S.CardsContainer>
                    <S.Card>
                        <S.CardIcon src={ICONS.insurance} alt="Ícone de Seguro" />
                        <S.CardText> Ambiente seguro: realize as sessões no conforto da sua casa, o que pode facilitar a abertura emocional. </S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon src={ICONS.padlock} alt="Ícone de Cadeado" />
                        <S.CardText> Maior privacidade: ideal para quem se sente constrangido em frequentar consultórios tradicionais. </S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon src={ICONS.telephone} alt="Ícone de Telefone" />
                        <S.CardText style={{width: "80%"}}> Comunicação facilitada para alguns: A comunicação, utilizada em tipos de terapia online, pode ser mais fácil para pessoas com dificuldades de expressão. </S.CardText>
                    </S.Card>
                </S.CardsContainer>
            </S.Container>
        </Section>
    )
}

export default BenefitsPage;