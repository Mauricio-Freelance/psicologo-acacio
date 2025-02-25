import * as S from "./styles";
import ICONS from "@/assets/icons";
import ContactButton from "@/components/ContactButton";
import Section from "@/components/Section";


const ContactPage = () => {
    return (
        <Section id="contact">
            <S.Container>
                <S.Title>Entre em contato e agende já sua consulta.</S.Title>
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
            </S.Container>
        </Section>
    )
}


export default ContactPage;