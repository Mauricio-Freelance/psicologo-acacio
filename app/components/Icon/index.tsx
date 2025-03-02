import * as S from "./styles";

interface Props{
    iconPath: string;
    alt: string;
    onClick?: () => void;
}

const Icon = ({
    iconPath,
    alt,
    onClick,
} : Props ) => {
    return (
        <S.Icon 
        src={iconPath}
        alt={alt}
        onClick={onClick}
        />
    )
}

export default Icon;