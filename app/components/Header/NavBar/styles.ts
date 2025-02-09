import styled from "styled-components";
import { SIZES } from "../../../styles/fonts";
import COLORS from "../../../styles/colors";

export const Container = styled.nav`
    display: flex;
`; 

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
    list-style: none;
    align-items: center;
    justify-content: space-around;
`;

export const ListItem = styled.li`
    position: relative;
    cursor: pointer;
    font-size: ${SIZES.label};
    font-family: Arial, sans-serif;
    color: ${COLORS.black};
    transition: color 0.3s;
    &:hover {
        color: #666;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;
