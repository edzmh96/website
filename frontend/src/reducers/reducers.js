import { combineReducers } from 'redux'
import { NEW_USER_MESSAGE, NEW_BOT_MESSAGE, MessageType, UPDATED_INPUT } from './actions'
import { getReplyFromIntent } from '../utils/botUtils'

const createMessage = (message, type) => {
    return {
        message,
        type
    }
}

const messages = (messages=[], action) => {
    switch (action.type) {
        case NEW_USER_MESSAGE:
            return [...messages, createMessage(action.message, MessageType.User)]
        case NEW_BOT_MESSAGE:
            return [...messages, createMessage(getReplyFromIntent(action.message), MessageType.Bot)]
        default:
            return messages
    }
}

const inputValue = (value="", action) => {
    switch (action.type) {
        case UPDATED_INPUT:
            return action.value
        case NEW_USER_MESSAGE:
            return ""
        default:
            return value
    }
}

const edwardApp = combineReducers({
    messages,
    inputValue
})

export default edwardApp