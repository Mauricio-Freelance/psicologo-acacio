import React from "react";
import * as S from "./styles"
import ICONS from "@/assets/icons"


interface ContactButtonProps {
    backgroundColor?: string;
    color?: string;
    marginLeft?: string;
    marginTop?: string;
    iconSrc?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
    backgroundColor = "#07A8b0",
    color = "#FFF",
    marginLeft = "20%",
    marginTop = "4%",
    iconSrc = ICONS.whatsAppWhite,
}) => {

    const handleContact = () => {
        // Adicione a função para abrir o WhatsApp
        // Utilize o link do WhatsApp para abrir o contato
        window.open("https://api.whatsapp.com/send/?phone=558899580857&text&type=phone_number&app_absent=0")
    }

    return (
        <S.Container
        style={{
            backgroundColor: backgroundColor,
            color: color,
            marginLeft: marginLeft,
            marginTop: marginTop,
        }}
        onClick={handleContact}
        >
            <S.Text>Saber mais</S.Text>
            <S.Icon src={iconSrc} alt="Ícone do WhatsApp"/>
        </S.Container>
    )
}

export default ContactButton;