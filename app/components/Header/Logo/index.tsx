import * as S from "./styles"
import ICONS from "@/assets/icons"

const Logo = () => {
    return (
        <S.Container>
            <S.Image src={ICONS.logo} alt="Logo" />
            <S.Text>Acácio Tórres</S.Text>
        </S.Container>
    )
}

export default Logo