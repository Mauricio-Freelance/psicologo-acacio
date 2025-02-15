import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    overflow: hidden;
`;

export const Content = styled.div`
    display: flex;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
`;
