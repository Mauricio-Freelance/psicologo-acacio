import styled from "styled-components";
import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes";
import IconSIZES from "@/constants/iconSizes";
import {FONTS, SIZES} from "@/styles/fonts";

export const Container = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const Image = styled.img`
    margin-right: 150px;
    width: ${IconSIZES.iconWidth};
    height: ${IconSIZES.iconHeight};


    @media ${device.mobile} {
        margin-right: 120px;
    }
`

export const Text = styled.p`
    position: absolute;
    color: ${COLORS.primary};
    font-size: ${SIZES.subTitle};
    font-family: ${FONTS.secondary};
    font-style: italic;
    margin-top: 10px;
    margin-left: 20px;


    @media ${device.mobile} {
        font-size: ${SIZES.titleMobile};
    }
`