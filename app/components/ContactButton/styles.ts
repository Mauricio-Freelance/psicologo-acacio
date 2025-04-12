import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes/index";
import styled from "styled-components";
import { SIZES } from "@/styles/fonts"


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    cursor: pointer;
    background-color: ${COLORS.primary};
    width: 130px;
    height: 40px;
    color: ${COLORS.white};
    border-radius: 20px;
    align-items: center;
    justify-content: center;


    @media ${device.mobile} {
        width: 150px;
        height: 30px;
    }
`;

export const Text = styled.p`
    font-size: ${SIZES.char};


    @media ${device.mobile} {
        font-size: ${SIZES.labelMobile};
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;


    @media ${device.mobile} {
        width: 15px;
        height: 15px;
    }
`;