import ContactButton from "@/components/ContactButton";
import ImageWithLegend from "@/components/ImageWithLegend";
import IMAGES from "@/assets/images";
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
                <S.InfoContainer>
                    <S.SubTitle> Se você busca: </S.SubTitle>
                    <S.ListContainer>
                        <S.ListText> Superar desafios emocionais: ansiedade, depressão, estresse, traumas, etc. </S.ListText>
                        <S.ListText> Melhorar seus relacionamentos consigo mesmo, com familiares, amigos ou parceiros. </S.ListText>
                        <S.ListText> Desenvolver autoconhecimento e inteligência emocional para lidar melhor com as emoções e tomar decisões mais conscientes. </S.ListText>
                        <S.ListText> Alcançar seus objetivos de vida com mais clareza, propósito e bem-estar. </S.ListText>
                    </S.ListContainer>
                    <S.Text> Entre em contato para uma consulta inicial. Será um prazer te conhecer e juntos trilharmos um caminho de crescimento e desenvolvimento pessoal. </S.Text>
                    <ContactButton />
                </S.InfoContainer>
                <S.ImageContainer>
                        <ImageWithLegend 
                            imagePath={IMAGES.about}
                            alt="Psicólogo Acácio Tórres"
                            legend="Raimundo Acácio Costa Tôrres Filho CRP 11ª - 04373"
                        />
                </S.ImageContainer>
            </S.Container>
        </Section>
    )
}


export default AboutPage;