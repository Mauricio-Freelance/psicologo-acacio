import Contacts from "./Contacts";
import Logo from "./Logo";
import NavBar from "./NavBar";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Container>
            <S.Content>
                <Logo />
                <NavBar />
                <Contacts />
            </S.Content>

            <S.Swapper>
                <NavBar />
                <Logo />
                <Contacts />
            </S.Swapper>
        </S.Container>

    );
}

export default Header;