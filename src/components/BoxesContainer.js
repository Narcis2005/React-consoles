import React, { useEffect, useState } from "react";
import { addAnswer, addChanges, deleteAnswer } from "../redux/action";
import { connect, useDispatch, useSelector } from "react-redux";
import ConsoleBox from "./ConsoleBox";
import AddBox from "./AddBox";
import { Header, HeaderImage, HeaderText } from "./styles/header.style";
import { Boxes, Container, TextContainer } from "./styles/container.style";
import { Footer, FooterButton } from "./styles/footer.styled";
const BoxesContainer = (props) => {
   
    useEffect(()=> {
        setInputText(props.info[0].answers.map(answer => answer.text))
        if(isPressed){
            localStorage.setItem('reduxState', JSON.stringify(props.info[0]) )
            setIsPressed(false);
        }
    },[props])
    const [isPressed, setIsPressed] = useState(false);
    const [newBox, setNewBox] = useState({text: "", imageURL: ""})
    const [inputText, setInputText] = useState(props.info[0].answers.map(answer => answer.text))
    const [checked, setChecked] = useState(new Array(props.info[0].answers.length).fill(false))
    const [question, setQuestion] = useState(props.info[0].question.text)
    const handleChangeChecked = (index) => {
        setChecked(checked.map((box, boxIndex) => {
            
            if(index === boxIndex){
                
                return !box;
            }
            return box;
        }))
    }
    const handleChangeInputText = (index, text) => {
        setInputText(inputText.map((textFromState, textIndex) => {
            if (index === textIndex){
                return text;
            }
            return textFromState;
        }))
    }
    const setText =(text) => {
        setNewBox({...newBox, text:text})
    }
    const setImageURL= (url) => {
        setNewBox({...newBox, imageURL:url})
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter' && newBox.text && newBox.imageURL){
            props.addAnswer(newBox)
          setNewBox({text: "", imageURL: ""})
        }
    }
    const handleNext = () => {
        props.addChanges({question: question, answers: inputText})
        setIsPressed(true);
        
    }
    return (
        <>
        <Header>
            <HeaderImage src={props.info[0].question.imageURL} />
            <HeaderText>Gaming Habits Among Teenagers</HeaderText>
        </Header>
            <Container>
                <TextContainer type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <Boxes> 
                    {props.info[0].answers.map((answer, index) => (
                        <ConsoleBox deleteFunction={ props.deleteAnswer} 
                        answer={answer}
                        key={index}
                        index={index} 
                        value={checked[index]}
                        handleCheckboxChange={handleChangeChecked}
                        inputText={inputText[index]}
                        handleChangeInputText={handleChangeInputText}
                        />

                    ))}
                    <AddBox box={newBox} setText={setText} setImageURL={setImageURL} handleKeyPress={handleKeyPress}/>
                </Boxes>
    
            </Container>
            <Footer>
                <FooterButton onClick={() => handleNext()}>Next</FooterButton>
            </Footer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteAnswer: index => dispatch(deleteAnswer(index)),
        addAnswer: payload => dispatch(addAnswer(payload)),
        addChanges: payload => dispatch(addChanges(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxesContainer);