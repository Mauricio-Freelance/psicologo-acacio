import Logo from "./Logo";
import NavBar from "./NavBar";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Container>
            <S.Content>
                <Logo />
                <NavBar />
            </S.Content>
        </S.Container>
    );
}

export default Header;