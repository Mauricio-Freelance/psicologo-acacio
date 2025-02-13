import * as S from "./styles";
import Section from "@/components/Section";

const WorkPage = () => {
    return (
        <Section id="work">
            <S.Container>
                <S.Title> Meu Trabalho Baseia-se Em: </S.Title>
                <S.CardsContainer>
                    <S.Card>
                        <S.CardTitle> Criar um espaço seguro e acolhedor </S.CardTitle>
                    </S.Card>
                    <S.Card>
                        <S.CardTitle> Ouvir com atenção e empatia o paciente </S.CardTitle>
                    </S.Card>
                    <S.Card>
                        <S.CardTitle> Utilizar técnicas e abordagens terapêuticas eficazes </S.CardTitle>
                    </S.Card>
                    <S.Card>
                        <S.CardTitle> Empoderar você a desenvolver suas próprias ferramentas </S.CardTitle>
                    </S.Card>
                </S.CardsContainer>
            </S.Container>
        </Section>
    )
}

export default WorkPage;