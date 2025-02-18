import ContactButton from "@/components/ContactButton";
import ICONS from "@/assets/icons";
import * as S from "./styles";
import Section from "@/components/Section";


const FaqPage = () => {
    return (
        <Section id="faq">
            <S.Container>
                <S.Title>FAQ</S.Title>
                <S.ListContainer>
                    <S.Question>
                        <S.RightArrow src={ICONS.rightArrow} alt="Flecha apontada para a direita" />
                        <S.QuestionText> Qual a diferença entre a terapia presencial e a online? </S.QuestionText>
                    </S.Question>

                    <S.Question>
                        <S.QuestionText> Para quem é indicado o processo terapêutico? </S.QuestionText>
                    </S.Question>

                    <S.Question>
                        <S.QuestionText> Qual a duração e a frequência das sessões? </S.QuestionText>
                    </S.Question>

                    <S.Question>
                        <S.QuestionText> Qual o custo das terapias? </S.QuestionText>
                    </S.Question>

                    <S.Question>
                        <S.QuestionText> Como ocorre o atendimento remoto(online)? </S.QuestionText>
                    </S.Question>
                </S.ListContainer>
            </S.Container>
        </Section>
    )
}


export default FaqPage;