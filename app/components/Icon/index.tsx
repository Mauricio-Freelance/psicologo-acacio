import * as S from "./styles";

interface Props{
    iconPath: string;
    alt: string;
}

const Icon = ({
    iconPath,
    alt
} : Props ) => {
    return (
        <S.Icon 
        src={iconPath}
        alt={alt}
        />
    )
}

export default Icon;