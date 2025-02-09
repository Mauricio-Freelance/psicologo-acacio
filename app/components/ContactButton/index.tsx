import * as S from "./styles"
import Icon from "@/components/Icon"
import ICONS from "@/assets/icons"


const ContactButton = () => {
    return (
        <S.Container>
            <S.Text>Saber mais</S.Text>
            <Icon iconPath={ICONS.whatsApp} alt="Ícone do WhatsApp"/>
        </S.Container>
    )
}

export default ContactButton