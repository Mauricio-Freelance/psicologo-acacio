import * as S from "./styles"
import ICONS from "@/assets/icons"


const ContactButton = () => {
    return (
        <S.Container>
            <S.Text>Saber mais</S.Text>
            <S.Icon src={ICONS.whatsAppWhite} alt="Ícone do WhatsApp"/>
        </S.Container>
    )
}

export default ContactButton