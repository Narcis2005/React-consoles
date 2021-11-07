import React from 'react';
import { Box, BoxImg } from './styles/box.styled';
import { NewBoxInput } from './styles/NewBox.styled';

const AddBox = ({box, setText, setImageURL, handleKeyPress}) => {

    return (
      <Box>
           <BoxImg src="image-placeholder.jpg"/>
            <NewBoxInput type="text" placeholder="Enter image url" onKeyPress={handleKeyPress} value={box.imageURL} onChange={(e) => setImageURL(e.target.value)}/>
            <NewBoxInput type="text" placeholder="Enter text" onKeyPress={handleKeyPress} value={box.text} onChange={(e) => setText(e.target.value)}/>
      </Box>
    )
}

export default AddBox;