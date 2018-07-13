import fetch from 'cross-fetch';

/*
 * action Types
 */

export const NEW_USER_MESSAGE = 'NEW_USER_MESSAGE'
export const NEW_BOT_MESSAGE = 'NEW_BOT_MESSAGE'
export const UPDATED_INPUT = 'UPDATED_INPUT'

//TODO: TO DISPLAY LOADING MESSAGE
// export const NEW_BOT_MESSAGE_REQUEST = 'NEW_BOT_MESSAGE_REQUEST'
// export const NEW_BOT_MESSAGE_SUCCESS = 'NEW_BOT_MESSAGE_SUCCESS'
// export const NEW_BOT_MESSAGE_FAILURE = 'NEW_BOT_MESSAGE_FAILURE'

/*
 * constants
 */

export const MessageType = {
    User: 'USER',
    Bot: 'BOT'
}

const LUIS_ENDPOINT = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/2cf32d88-bcf8-45ff-a62a-7093f8f99de8?subscription-key=bc8fa65a8dd04b48a96b4cbc2a767e0f&verbose=true&timezoneOffset=0&q="
/*
 * action creators
 */

// helper
const _newUserMessage = (message) => {
    return { type: NEW_USER_MESSAGE, message: message }
}
export const newUserMessage = (message) => {
    return dispatch => {
        dispatch(_newUserMessage(message))
        return fetch(LUIS_ENDPOINT+message)
            .then(
                response => response.json(),
                error => console.log('error:', error)
            )
            .then(json => {
                console.log(json)
                if (json.topScoringIntent) {
                    dispatch(newBotMessage(json.topScoringIntent.intent))
                } else {
                    dispatch(newBotMessage("Error"))
                }
            })
    }
}

export const newBotMessage = (message) => {
    return { type: NEW_BOT_MESSAGE, message: message }
}

export const updateInput = (value) => {
    return { type: UPDATED_INPUT, value: value }
}
