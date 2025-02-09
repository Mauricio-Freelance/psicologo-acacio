import * as S from "./styles";

const NavBar = () => {
    return (
        <S.Container>
            <S.List>
                <S.ListItem>
                    <S.Link href="/">Home</S.Link>
                </S.ListItem>
                <S.ListItem>
                    <S.Link href="/work">Meu Trabalho</S.Link>
                </S.ListItem>
                <S.ListItem>
                    <S.Link href="/about">about</S.Link>
                </S.ListItem>
                <S.ListItem>
                    <S.Link href="/benefits">Benefícios</S.Link>
                </S.ListItem>
                <S.ListItem>
                    <S.Link href="/faq">FAQ</S.Link>
                </S.ListItem>
                <S.ListItem>
                    <S.Link href="/contacts">Contatos</S.Link>
                </S.ListItem>
            </S.List>
        </S.Container>
    );
}

export default NavBar;