import * as S from "./styles";


interface SliderProps {
    page: "work" | "benefits",
    cards: React.ReactNode[],
}


const Slider = ({page, cards}: SliderProps) => {

    return (
        <S.Container>
            <S.Slider>
                <S.Slides>
                    {/* { cards.map((c, i) => { */}
                        <S.Slide>
                            {/* card */}
                        </S.Slide> 
                        {/* correspondente a quantidade de cards da Page */}

                        {/* <S.NavigationAuto>
                            /* function que troque para o proximo card a cada 8 segundos *
                        </S.NavigationAuto> */}

                        {/* <ManualNavigation>
                             setinha clicavel para trocar para o card da esquerda ou direita, caso esteja no ultimo e for para a direita, voltara ao primeiro, o mesmo se aplica ao contrario 
                        <ManualNavigation> */}
                    {/* })
                } */}
                </S.Slides>
            </S.Slider>
        </S.Container>
    );
}


export default Slider;