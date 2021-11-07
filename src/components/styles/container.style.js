import styled from "styled-components";


export const Container = styled.div`
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 20px;
`
export const TextContainer = styled.input`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 31px;
    color: #475CAF;
    width: 100%;
    padding: 5px;
    border-color: rgba(0,0,0,0);
    transition: border-color .125s ease;
    &:hover{
        border-color: rgba(0,0,0,1);
    }
`
export const Boxes = styled.div`
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    & > * {
        flex: 0 1 25%;
    }
`