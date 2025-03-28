import * as S from "./styles";
import ContactButton from "@/components/ContactButton";
import { home } from "@/constants/routes";
import ImageWithLegend from "@/components/ImageWithLegend";
import IMAGES from "@/assets/images";
import Section from "@/components/Section"


const HomePage = () => {
    return (
        <Section id={home}>
            <S.Container>
                {/* <Slider data={slidesData}/> */}
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
                    <S.ButtonContainer>
                        <ContactButton />
                    </S.ButtonContainer>
                </S.InfoContainer>
                <S.ImageContainer>
                    <ImageWithLegend 
                        imagePath={IMAGES.home}
                        alt="Psicólogo Acácio Tórres"
                        legend="Raimundo Acácio Costa Tôrres Filho CRP 11ª - 04373"
                    />
                </S.ImageContainer>
            </S.Container>
        </Section>
    )
}

export default HomePage;