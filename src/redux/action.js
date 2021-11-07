import { ADD_ANSWER, ADD_CHANGES, DELETE_ANSWER, GET_INFO } from "./types"

export const getInfo = () => {
    return {
        type: GET_INFO
    }
}
export const deleteAnswer = (index) => {
    return {
        type: DELETE_ANSWER,
        index: index
    }
}
export const addAnswer = (payload) => {
    return {
        type: ADD_ANSWER,
        payload: payload
    }
}

export const addChanges = (payload) => {
    return {
        type: ADD_CHANGES,
        payload: payload
    }
}