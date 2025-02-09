import * as S from "./styles";
import ContactButton from "@/components/ContactButton";
import ImageWithLegend from "@/components/ImageWithLegend";
import Section from "@/components/Section"
import IMAGES from "@/assets/images";

const HomePage = () => {
    return (
        <Section id="home">
            <S.Container>
                <S.InfoContainer>
                    <S.TextContainer>
                        <S.Text>
                            Olá, sou Acácio Tôrres, psicólogo com especialização em terapia cognitivo-comportamental, atuo há mais de 15 anos nas áreas de saúde mental e psicologia clínica.
                        </S.Text>
                        <S.Text style={{color: "black"}}>
                            Meu objetivo é ajudar pessoas a alcançarem seu bem-estar emocional e construir uma vida mais plena e significativa.
                        </S.Text>
                        <S.Text>
                            Venha comigo dar o primeiro passo para uma nova jornada.
                        </S.Text>
                    </S.TextContainer>
                    <ContactButton />
                </S.InfoContainer>
                <S.ImageContainer>
                        <ImageWithLegend 
                            imagePath={IMAGES.home}
                            alt="Psicólogo Acácio Tórres"
                            legend="Raimundo Acácio Costa Tôrres Filho \n CRP 11ª - 04373"
                        />
                    </S.ImageContainer>
            </S.Container>
        </Section>
    )
}

export default HomePage