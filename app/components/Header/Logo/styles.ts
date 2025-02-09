import styled from "styled-components";
import COLORS from "@/styles/colors";
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
`

export const Text = styled.p`
    position: absolute;
    color: ${COLORS.primary};
    font-size: ${SIZES.title};
    font-family: ${FONTS.secondary};
    font-style: italic;
    bottom: 40;
    margin-left: 30px;
`