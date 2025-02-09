import * as S from "./styles"
import ICONS from "@/assets/icons"
import Icon from "@/components/Icon"

const Contacts = () => {
    return (
        <S.Container>
        <Icon iconPath={ICONS.whatsApp} alt="Ícone do WhatsApp" />
        <Icon iconPath={ICONS.instagram} alt="Ícone do Instagram" />
        <Icon iconPath={ICONS.email} alt="Ícone do Email" />
        </S.Container>
    )
}

export default Contacts