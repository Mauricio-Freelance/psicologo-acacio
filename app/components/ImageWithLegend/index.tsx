import * as S from "./styles"


interface Props{
    imagePath: string;
    alt: string;
    legend: string;
}

const ImageWithLegend = ({
    imagePath,
    alt,
    legend
} : Props ) => {
    return (
        <S.Container>
            <S.Image src={imagePath} alt={alt} />
            <S.Legend>
                <S.LegendText>{legend}</S.LegendText>
            </S.Legend>
        </S.Container>
    )
}

export default ImageWithLegend