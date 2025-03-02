import { useState } from "react";
import ContactButton from "@/components/ContactButton";
import { faq } from "@/constants/routes";
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
        <Section id={faq}>
            <S.Container>
                <S.Title>FAQ</S.Title>
                <S.ListContainer>
                    <S.QAContainer>
                        <S.Question
                            onClick={() => toggleOption("first")}
                        >
                            <S.RightArrow
                            src={ICONS.rightArrow}
                            alt="Flecha apontada para a direita"
                            isOpen={options.first} />
                            <S.QuestionText> Qual a diferença entre a terapia presencial e a online? </S.QuestionText>
                        </S.Question>

                        <S.Answer style={{ display: options.first ? "flex" : "none" }}>
                                <S.AnswerText> A diferença entre as duas modalidades é a localização. Enquanto no presencial é necessário se deslocar até o local de atendimento do psicólogo, na modalidade online não é necessário ter esse deslocamento, já que a consulta é feita pela internet, através de recursos eletrônicos (computador, tablet ou celular). </S.AnswerText>
                                <S.ButtonContainer>
                                    <ContactButton 
                                    backgroundColor="white" 
                                    color="#07A8b0" 
                                    iconSrc={ICONS.whatsApp}/>
                                </S.ButtonContainer>
                        </S.Answer>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            onClick={() => toggleOption("second")}
                        >
                            <S.RightArrow
                            src={ICONS.rightArrow}
                            alt="Flecha apontada para a direita"
                            isOpen={options.second} />
                            <S.QuestionText> Para quem é indicado o processo terapêutico? </S.QuestionText>
                        </S.Question>

                        <S.Answer style={{ display: options.second ? "flex" : "none" }}>
                                <S.AnswerText> Para todas as pessoas, porém sempre é necessário a compreensão das necessidades individuais. </S.AnswerText>
                                <S.ButtonContainer>
                                    <ContactButton 
                                    backgroundColor="white" 
                                    color="#07A8b0"
                                    iconSrc={ICONS.whatsApp}/>
                                </S.ButtonContainer>
                        </S.Answer>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            onClick={() => toggleOption("third")}
                        >
                            <S.RightArrow
                            src={ICONS.rightArrow}
                            alt="Flecha apontada para a direita"
                            isOpen={options.third} />
                            <S.QuestionText> Qual a duração e a frequência das sessões? </S.QuestionText>
                        </S.Question>

                        <S.Answer style={{ display: options.third ? "flex" : "none" }}>
                                <S.AnswerText> As sessões duram em torno de 50 a 60 minutos. Quanto a frequência, será variável pois dependerá das necessidades de cada caso (em todos os casos serão acordados dias e horários entre o profissional e os pacientes). </S.AnswerText>
                                <S.ButtonContainer>
                                    <ContactButton 
                                    backgroundColor="white" 
                                    color="#07A8b0" 

                                    iconSrc={ICONS.whatsApp}/>
                                </S.ButtonContainer>
                        </S.Answer>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            onClick={() => toggleOption("fourth")}
                        >
                            <S.RightArrow
                            src={ICONS.rightArrow}
                            alt="Flecha apontada para a direita"
                            isOpen={options.fourth} />
                            <S.QuestionText> Qual o custo das terapias? </S.QuestionText>
                        </S.Question>

                        <S.Answer style={{ display: options.fourth ? "flex" : "none" }}>
                                <S.AnswerText> Devido orientações do código de ética do Psicólogo é vedada a divulgação de valores (entre em contato através de nossos canais para essa informação), entretanto podemos afirmar que não existe melhor investimento do que o realizado em prol de si mesmo. </S.AnswerText>
                                <S.ButtonContainer>
                                    <ContactButton 
                                    backgroundColor="white" 
                                    color="#07A8b0" 
                                    iconSrc={ICONS.whatsApp}/>
                                </S.ButtonContainer>
                        </S.Answer>
                    </S.QAContainer>

                    <S.QAContainer>
                        <S.Question
                            onClick={() => toggleOption("fifth")}
                        >
                            <S.RightArrow
                            src={ICONS.rightArrow}
                            alt="Flecha apontada para a direita"
                            isOpen={options.fifth} />
                            <S.QuestionText> Como ocorre o atendimento remoto (online)? </S.QuestionText>
                        </S.Question>

                        <S.Answer style={{ display: options.fifth ? "flex" : "none" }}>
                                <S.AnswerText> O profissional e o paciente acordarão dias e horários previamente. Os encontros serão realizados através de sala virtual no Google Meet (link será enviado pelo profissional). </S.AnswerText>
                                <S.ButtonContainer>
                                    <ContactButton 
                                    backgroundColor="white" 
                                    color="#07A8b0" 

                                    iconSrc={ICONS.whatsApp}/>
                                </S.ButtonContainer>

                        </S.Answer>
                    </S.QAContainer>
                </S.ListContainer>
            </S.Container>
        </Section>
    );
};

export default FaqPage;
