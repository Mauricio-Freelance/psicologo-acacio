import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Slider = styled.div`
    position: relative;
`;

export const Slides = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
    min-width: 100%;
    box-sizing: border-box;
`;

export const NavigationAuto = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const AutoNavButton = styled.div<{ active: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#000" : "#ccc")};
    margin: 0 5px;
    cursor: pointer;
`;

export const ManualNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
`;

export const NavButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;