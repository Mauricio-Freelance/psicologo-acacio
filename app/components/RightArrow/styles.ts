import styled from "styled-components";


export const Container = styled.div`
    width: 50px;
    overflow: hidden;
`;

export const RightArrow = styled.img<{ isOpen: boolean }>`
    display: flex;
    width: 24px;
    height: 24px;
    margin-left: 15px;
    transform: rotate(${(props) => (props.isOpen ? "90deg" : "0deg")});
    transition: transform 0.3s ease-in-out;
`;