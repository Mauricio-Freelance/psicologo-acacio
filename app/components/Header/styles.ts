import COLORS from "@/styles/colors";
import { device } from "@/styles/mediaSizes";
import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    z-index: 9999;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);

    
    @media ${device.mobile} {
        height: auto; // Altura automática para mobile
        flex-direction: column; // Altera para coluna em dispositivos móveis
    }
`;

export const Content = styled.div`
    display: flex;
    background-color: ${COLORS.white};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-left: 5%;
    margin-right: 5%;
`;

export const DesktopNav = styled.div`
    display: flex;

    @media ${device.mobile} {
        display: none; // Oculta a NavBar em resoluções menores
    }
`;