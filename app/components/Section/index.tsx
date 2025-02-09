import * as S from "./styles"

interface Props{
    id: string;
    children: React.ReactNode;
}

const Section = ({
    id,
    children
} : Props ) => {
    return (
        <S.Container id={id}>
            {children}
        </S.Container>
    )
}

export default Section;