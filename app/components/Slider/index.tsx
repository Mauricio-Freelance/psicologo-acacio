import * as S from "./styles";
import cardsData from "../../constants/cardsData.json";
import { CardsData } from "../../constants/types";
import { useState } from "react";


const typedCardsData = cardsData as CardsData;


const Slider = () => {

    const [options, setOptions] = useState({
        isWork: false,
        isBenefits: false,

    });

    return (
        <S.Container>
            <S.Slider>
                <S.Slides>
                    <S.Radio type="radio" name="radio-btn" id="radio" /> 
                    {/* correspondente a quantidade de cards da Page */}

                    <S.Slide>
                        {/* 1 card para cada slide, nesse caso o primeiro deve vir ativo para ser mostrado na tela */}
                    </S.Slide> 
                    {/* correspondente a quantidade de cards da Page */}

                    <S.NavigationAuto>
                        <S.AutoBtn></S.AutoBtn>
                        {/* sera correspondente a quantidade de cards da Page */}
                    </S.NavigationAuto>

                    <S.ManualNavigation>
                        <S.ManualBtn htmlFor="radio"></S.ManualBtn>
                        {/* sera correspondente a quantidade de cards da Page */}
                    </S.ManualNavigation>

                </S.Slides>
            </S.Slider>
        </S.Container>
    );
}


export default Slider;