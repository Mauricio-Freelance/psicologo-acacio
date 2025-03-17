import Burger from "./Burger";
import Contacts from "./Contacts";
import Logo from "./Logo";
import NavBar from "./NavBar";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Container>
            <S.Content>
                <Burger />
                <Logo />
                {/* NavBar visível apenas em resoluções maiores */}
                <S.DesktopNav>
                    <NavBar />
                </S.DesktopNav>
                <Contacts />
            </S.Content>
        </S.Container>
    );
}

export default Header;