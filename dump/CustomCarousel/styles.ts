import styled from "styled-components";
import { device } from "@/styles/mediaSizes/index";


export const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    @media ${device.mobile} {
        display: block;
    }
`

export const Content = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
`

export const Slide = styled.div`
    flex: 0 0 100%;
    width: 100%;    
`

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }
`

export const Dots = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
`

export const Dot = styled.button`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    border: none;
    padding: 0;

    &.active {
        background: #fff;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
`