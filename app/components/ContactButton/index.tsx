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
    return (
        <S.Container
        style={{
            backgroundColor: backgroundColor,
            color: color,
            marginLeft: marginLeft,
            marginTop: marginTop,
        }}
        >
            <S.Text>Saber mais</S.Text>
            <S.Icon src={iconSrc} alt="Ícone do WhatsApp"/>
        </S.Container>
    )
}

export default ContactButton;