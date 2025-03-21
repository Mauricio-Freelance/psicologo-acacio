import Contacts from "./Contacts";
import Logo from "./Logo";
import NavBar from "./NavBar";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Container>
            <S.BurgerContainer>
                <NavBar />
            </S.BurgerContainer>
            
            <S.SubContainer>
                <S.Content>
                    <Logo />
                    <NavBar />
                    <Contacts />
                </S.Content>

                <S.ContentMobile>
                    <Logo />
                    <Contacts />
                </S.ContentMobile>
            </S.SubContainer>
        </S.Container>

    );
}

export default Header;