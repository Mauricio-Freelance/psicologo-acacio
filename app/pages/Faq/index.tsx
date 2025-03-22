import { faq } from "@/constants/routes";
import { useState } from "react";
import * as S from "./styles";
import ContactButton from "@/components/ContactButton";
import COLORS from "@/styles/colors";
import ICONS from "@/assets/icons";
import RightArrow from "@/components/RightArrow";
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
                    {Object.keys(options).map((key, index) => (
                        <S.QAContainer key={key}>
                            <S.Question onClick={() => toggleOption(key as keyof typeof options)}>
                                <RightArrow isOpen={options[key as keyof typeof options]} />
                                <S.QuestionText>
                                    {[
                                        "Qual a diferença entre a terapia presencial e a online?",
                                        "Para quem é indicado o processo terapêutico?",
                                        "Qual a duração e a frequência das sessões?",
                                        "Qual o custo das terapias?",
                                        "Como ocorre o atendimento remoto (online)?"
                                    ][index]}
                                </S.QuestionText>
                            </S.Question>

                            <S.Answer style={{ display: options[key as keyof typeof options] ? "flex" : "none" }}>
                                <S.AnswerText>
                                    {[
                                        "A diferença entre as duas modalidades é a localização. Enquanto no presencial é necessário se deslocar até o local de atendimento do psicólogo, na modalidade online não é necessário ter esse deslocamento, já que a consulta é feita pela internet, através de recursos eletrônicos (computador, tablet ou celular).",
                                        "Para todas as pessoas, porém sempre é necessário a compreensão das necessidades individuais.",
                                        "As sessões duram em torno de 50 a 60 minutos. Quanto a frequência, será variável pois dependerá das necessidades de cada caso (em todos os casos serão acordados dias e horários entre o profissional e os pacientes).",
                                        "Devido orientações do código de ética do Psicólogo é vedada a divulgação de valores (entre em contato através de nossos canais para essa informação), entretanto podemos afirmar que não existe melhor investimento do que o realizado em prol de si mesmo.",
                                        "O profissional e o paciente acordarão dias e horários previamente. Os encontros serão realizados através de sala virtual no Google Meet (link será enviado pelo profissional)."
                                    ][index]}
                                </S.AnswerText>
                                <S.ButtonContainer>
                                    <ContactButton 
                                        backgroundColor={COLORS.white} 
                                        color={COLORS.primary} 
                                        iconSrc={ICONS.whatsApp}
                                    />
                                </S.ButtonContainer>
                            </S.Answer>
                        </S.QAContainer>
                    ))}
                </S.ListContainer>
            </S.Container>
        </Section>
    );
};

export default FaqPage;