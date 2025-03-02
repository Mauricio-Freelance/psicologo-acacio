import * as S from "./styles";
import { contact } from "@/constants/routes";
import ContactButton from "@/components/ContactButton";
import ICONS from "@/assets/icons";
import ImageWithLegend from "@/components/ImageWithLegend";
import IMAGES from "@/assets/images";
import Section from "@/components/Section";


const ContactPage = () => {
    return (
        <Section id={contact}>
            <S.Container>
                <S.Title>Entre em contato e agende já sua consulta.</S.Title>
                <S.Content>
                <S.InfoContainer>
                    <S.Text>Telefone: +55 88 9958-0857</S.Text>
                    <S.Text>WhattsApp: +55 88 9958-0857</S.Text>
                    <S.Text>Email: acaciofh@gmail.com</S.Text>
                    <S.Text>Ou</S.Text>
                    <S.ButtonContainer>
                        <ContactButton
                        backgroundColor="white" 
                        color="#07A8b0"
                        iconSrc={ICONS.whatsApp}/>
                    </S.ButtonContainer>
                </S.InfoContainer>
                <S.ImageContainer>
                    <ImageWithLegend
                                backgroundColor="white"
                                color="#07A8b0"
                                imagePath={IMAGES.contact}
                                alt="Psicólogo Acácio Tórres"
                                legend="Raimundo Acácio Costa Tôrres Filho CRP 11ª - 04373" 
                    />
                </S.ImageContainer>
                </S.Content>
            </S.Container>
        </Section>
    )
}


export default ContactPage;