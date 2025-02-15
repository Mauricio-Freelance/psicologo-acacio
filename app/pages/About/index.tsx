import * as S from "./styles";
import Section from "@/components/Section";


const AboutPage = () => {
    return (
        <Section id="about">
            <S.Container>
                <S.TitleContainer>
                    <S.Line />
                    <S.Title> A terapia é um processo colaborativo e transformador. </S.Title>
                    <S.Line />
                </S.TitleContainer>
            </S.Container>
        </Section>
    )
}


export default AboutPage;