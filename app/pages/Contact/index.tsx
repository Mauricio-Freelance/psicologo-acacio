import * as S from "./styles";
import ICONS from "@/assets/icons";
import Section from "@/components/Section";


const ContactPage = () => {
    return (
        <Section id="contact">
            <S.Container>
                <S.InfoContainer>
                    <S.Text>Entre em contato. E agende já sua consulta.</S.Text>
                    <S.Text>Telefone: +55 88 9958-0857</S.Text>
                    <S.Text>WhattsApp: +55 88 9958-0857</S.Text>
                    <S.Text>Email: acaciofh@gmail.com</S.Text>
                    <S.Text>Ou</S.Text>
                </S.InfoContainer>
            </S.Container>
        </Section>
    )
}


export default ContactPage;