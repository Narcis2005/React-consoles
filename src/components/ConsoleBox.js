import React from 'react';
import { Box, BoxImg, BoxInput, BoxLabel, BoxText, DeleteButton } from './styles/box.styled';

const ConsoleBox = ({answer, value, handleCheckboxChange, index, deleteFunction, inputText, handleChangeInputText}) => {
    return (
        <Box>
            <BoxInput type="checkbox" id={"myCheckbox"+ index} checked={value} onChange={() => {handleCheckboxChange(index)}}/>
            <BoxLabel htmlFor={"myCheckbox"+ index}>
            <DeleteButton onClick={() => deleteFunction(index)}><img src="trash.png"/></DeleteButton>
                 <BoxImg src={answer.imageURL} />
            </BoxLabel>
            <BoxText value= {inputText} onChange={(e) => handleChangeInputText(index, e.target.value)}/>
        </Box>
    )
}

export default ConsoleBox;