import * as S from "./styles"


interface Props{
    imagePath: string;
    alt: string;
    legend: string;
    backgroundColor?: string;
    color?: string;
}

const ImageWithLegend = ({
    imagePath,
    alt,
    legend,
    backgroundColor = "#07A8b0",
    color = "#FFF",
} : Props ) => {
    return (
        <S.Container>
            <S.Image src={imagePath} alt={alt} />
            <S.Legend
                    style={{
                        backgroundColor: backgroundColor,
                        color: color,
                    }}>
                <S.LegendText>{legend}</S.LegendText>
            </S.Legend>
        </S.Container>
    )
}

export default ImageWithLegend