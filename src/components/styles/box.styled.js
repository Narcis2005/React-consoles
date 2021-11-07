import styled from "styled-components";


export const BoxImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`

export const BoxText = styled.input`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    margin: 10px 0;
    font-size: 15px;
    line-height: 22px;
    color: #4D4D4D;
    margin-left: 50%;
    transform: translate(-50%, 0);
    transition: border-color 0.125s ease;
    padding: 5px;
    cursor: text;
    border: solid 1px rgba(0,0,0,0);

`

export const DeleteButton = styled.button`
    position: absolute;
    background: white;
    border: none;
    padding: 5px;
    margin: 5px 0 0 5px;
    border-radius: 50%;
    transition: opacity .125s ease;
    opacity: 0;
    & img{
        width: 20px;
        height: 20px;
        cursor: pointer;
        
    }
`
export const BoxLabel = styled.label`
    border: 1px solid #fff;
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    &::before{
        background-color: white;
        color: white;
        content: " ";
        display: block;
        border-radius: 50%;
        border: 1px solid grey;
        position: absolute;
        top: 15px;
        right: 15px;
        width: 25px;
        height: 25px;
        text-align: center;
        transition-duration: 0.125s;
        transform: scale(0);
    }
`
export const BoxInput = styled.input`
    display: none;
    &:checked + ${BoxLabel}:before{
        content: "✓";
        background-color: grey;
        transform: scale(1);
    }
`
export const Box = styled.div`
    top: 0;
    position: relative;
    max-width: 260px;
    min-width: 200px;
    max-height: 350px;
    box-shadow: 0px 1px 19px rgba(0,0,0,0.1);
    border-radius: 4px;
    transition: top 0.125s ease, box-shadow 0.125s ease;
    margin-bottom: 25px;
    &:hover{
        top: -10px;
        box-shadow: 0px 7px 19px rgba(0,0,0,0.4);
    }
    &:hover ${DeleteButton} {
        opacity: 1;
    }
    &:hover ${BoxText} {
        border-color: rgba(0,0,0,1);
    }
`