import { useState } from "react";
import ContactButton from "@/components/ContactButton";
import ICONS from "@/assets/icons";
import * as S from "./styles";
import Section from "@/components/Section";

const FaqPage = () => {
    const [options, setOptions] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
    });

    const toggleOption = (key: keyof typeof options) => {
        setOptions((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <Section id="faq">
            <S.Container>
                <S.Title>FAQ</S.Title>
                <S.ListContainer>
                    <S.QAContainer>
                        <S.Question
                            onClick={() => toggleOption("first")}
                        >
                            <S.RightArrow src={ICONS.rightArrow} alt="Flecha apontada para a direita" />
                            <S.QuestionText> Qual a diferença entre a terapia presencial e a online? </S.QuestionText>
                        </S.Question>
                        <S.Answer>
                                <S.AnswerText style={{ display: options.first ? "flex" : "none" }}> A diferença entre as duas modalidades é a localização. Enquanto no presencial é necessário se deslocar até o local de atendimento do psicólogo, na modalidade online não é necessário ter esse deslocamento, já que a consulta é feita pela internet, através de recursos eletrônicos (computador, tablet ou celular). </S.AnswerText>
                        </S.Answer>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            style={{ backgroundColor: options.second ? "white" : "black" }}
                            onClick={() => toggleOption("second")}
                        >
                            <S.RightArrow src={ICONS.rightArrow} alt="Flecha apontada para a direita" />
                            <S.QuestionText> Para quem é indicado o processo terapêutico? </S.QuestionText>
                        </S.Question>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            style={{ backgroundColor: options.third ? "white" : "black" }}
                            onClick={() => toggleOption("third")}
                        >
                            <S.RightArrow src={ICONS.rightArrow} alt="Flecha apontada para a direita" />
                            <S.QuestionText> Qual a duração e a frequência das sessões? </S.QuestionText>
                        </S.Question>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            style={{ backgroundColor: options.fourth ? "white" : "black" }}
                            onClick={() => toggleOption("fourth")}
                        >
                            <S.RightArrow src={ICONS.rightArrow} alt="Flecha apontada para a direita" />
                            <S.QuestionText> Qual o custo das terapias? </S.QuestionText>
                        </S.Question>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            style={{ backgroundColor: options.fifth ? "white" : "black" }}
                            onClick={() => toggleOption("fifth")}
                        >
                            <S.RightArrow src={ICONS.rightArrow} alt="Flecha apontada para a direita" />
                            <S.QuestionText> Como ocorre o atendimento remoto (online)? </S.QuestionText>
                        </S.Question>
                    </S.QAContainer>

                </S.ListContainer>
            </S.Container>
        </Section>
    );
};

export default FaqPage;
