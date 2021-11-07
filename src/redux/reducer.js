import info from '../proiect.json'
import { GET_INFO, DELETE_ANSWER, ADD_ANSWER, ADD_CHANGES } from './types';
const initialState = {
    info: info
};

const reducer = (state = initialState, action) => {
   
    switch(action.type) {
        case GET_INFO:
             return state;
        case DELETE_ANSWER:
            return {info: [{question: state.info[0].question, answers: state.info[0].answers.filter((answer, index) => index!==action.index)}]}
        case ADD_ANSWER:
            return {info: [{question: state.info[0].question, answers: [...state.info[0].answers, action.payload]}]}
        case ADD_CHANGES:
            return {info: [{question: {text: action.payload.question, imageURL: state.info[0].question.imageURL}, answers: action.payload.answers.map((answer, index) => {return {text: answer, imageURL: state.info[0].answers[index].imageURL}})}]}
        default: return state;
    }
        
}
export default reducer;