import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    margin-top: 11%;
    width: 100%;
    height: 70px;
    background: #fff;
    box-shadow: 0px -6px 17px rgba(0,0,0,0.04);
    justify-content: flex-end;
    align-items: center;
`

export const FooterButton = styled.button`
    position: relative;
    margin-right: 15%;
    color:white;
    width: 190px;
    height: 40px;
    background: linear-gradient(109deg, #4FF5AC -15%, #3698EB 104%);
    border: none;
    border-radius: 24px;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.18);
    &::after{
        content: "";
        position:absolute;
        top:0;
        bottom:0;
        width:100%;
        height:100%;
        left:0;
        transition: opacity .125s ease;
        background:rgba(0,0,0,0.5);
        opacity:0;
        border-radius: 24px;
    }
    &:hover::after{
        opacity:1;
    }
`