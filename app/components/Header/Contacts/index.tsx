import * as S from "./styles"
import ICONS from "@/assets/icons"
import Icon from "@/components/Icon"
import { email, instagram, whatsApp } from "@/constants/contacts"

const Contacts = () => {

    const handleSocialMidia = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <S.Container>
            <Icon 
                iconPath={ICONS.whatsApp} 
                alt="Ícone do WhatsApp"
                onClick={ () => handleSocialMidia(whatsApp)}
            />
            <Icon 
                iconPath={ICONS.instagram} 
                alt="Ícone do Instagram"
                onClick={ () => handleSocialMidia(instagram)}
            />
            <Icon 
                iconPath={ICONS.email}
                alt="Ícone do Email"
                onClick={ () => handleSocialMidia(email)}
         />
        </S.Container>
    )
}

export default Contacts