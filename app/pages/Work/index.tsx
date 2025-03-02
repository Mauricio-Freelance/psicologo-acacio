import * as S from "./styles";
import { work } from "@/constants/routes";
import Section from "@/components/Section";


const WorkPage = () => {
    return (
        <Section id={work}>
            <S.Container>
                <S.Title> Meu Trabalho Baseia-se Em: </S.Title>
                <S.CardsContainer>
                    <S.Card>
                        <S.CardTitle> Criar um espaço seguro e acolhedor </S.CardTitle>
                        <S.CardContent>
                        Onde você se sinta à vontade para explorar seus pensamentos, sentimentos e comportamentos sem julgamentos.
                        </S.CardContent>
                    </S.Card>
                    <S.Card>
                        <S.CardTitle> Ouvir com atenção e empatia o paciente </S.CardTitle>
                        <S.CardContent>
                        Busco compreender a sua história, suas dificuldades e seus objetivos de forma individualizada.
                        </S.CardContent>
                    </S.Card>
                    <S.Card>
                        <S.CardTitle> Utilizar técnicas e abordagens terapêuticas eficazes </S.CardTitle>
                        <S.CardContent style={{marginTop: "5%", width: "60%"}}>
                        Como especialista em terapia cognitivo-comportamental, utilizo ferramentas e estratégias personalizadas para ajudar a lidar com ansiedade, depressão, traumas, problemas de relacionamento e outros desafios.
                        </S.CardContent>
                    </S.Card>
                    <S.Card>
                        <S.CardTitle> Empoderar você a desenvolver suas próprias ferramentas</S.CardTitle>
                        <S.CardContent style={{width: "60%"}}>
                        Meu objetivo é te ajudar a se tornar protagonista da sua saúde mental, te guiando no desenvolvimento de recursos internos para lidar com os desafios da vida.
                        </S.CardContent>
                    </S.Card>
                </S.CardsContainer>
            </S.Container>
        </Section>
    )
}


export default WorkPage;