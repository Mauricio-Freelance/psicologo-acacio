import * as S from "./styles";
import { benefits } from "@/constants/routes";
import ICONS from "@/assets/icons";
import Section from "@/components/Section";


const BenefitsPage = () => {
    return (
        <Section id={benefits}>
            <S.Container>
                <S.Title> Benefícios da terapia online </S.Title>
                <S.Subtitle> Conveniência e Acessibilidade </S.Subtitle>
                <S.CardsContainer>
                    <S.Card>
                        <S.CardIcon src={ICONS.clock} alt="Ícone de Relógio" />
                        <S.CardText> Flexibilidade de horários: agende sessões em horários que se encaixam na sua rotina, sem se preocupar com deslocamentos. </S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon src={ICONS.barrier} alt="Ícone de Barreira" />
                        <S.CardText style={{width: "80%"}}> Elimine barreiras geográficas: acesse terapia de qualquer lugar com conexão à internet, ideal para quem viaja muito, mora em áreas remotas ou possui mobilidade reduzida. </S.CardText>
                    </S.Card>
                    <S.Card>
                        <S.CardIcon src={ICONS.availability} alt="Ícone de Disponibilidade" />
                        <S.CardText> Maior disponibilidade de profissionais: encontre o terapeuta ideal para você, sem se limitar à sua região. </S.CardText>
                    </S.Card>
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