import styled from "styled-components";
import { FONTS, SIZES, WEIGHTS } from "../../../styles/fonts";
import COLORS from "../../../styles/colors";
import { device } from "@/styles/mediaSizes";

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 50px;
    list-style: none;
    align-items: center;
    justify-content: space-around;


    @media ${device.mobile} {
        gap: 10px;
    }
`;

export const ListItem = styled.li`
    position: relative;
    cursor: pointer;
    font-size: ${SIZES.char};
    font-weight: ${WEIGHTS.bold};
    font-family: ${FONTS.primary};
    color: ${COLORS.black};
    transition: color 0.3s;
    &:hover {
        color: ${COLORS.gray};
    }


    @media ${device.mobile} {
        font-size: ${SIZES.charMobile};
    }
`;

export const Link = styled.span`
    text-decoration: none;
    color: inherit;
`;
