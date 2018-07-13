import { connect } from 'react-redux'
import { newUserMessage, newBotMessage, updateInput } from '../reducers/actions'
import MessagesDisplay from './MessagesDisplay';

const mapStateToProps = state => {
    return {
        messages: state.messages,
        inputValue: state.inputValue,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEnterPressed: e => {
            if (e.key === 'Enter') {
                dispatch(newUserMessage(e.target.value))
            }
        },
        onBotReply: message => {
            dispatch(newBotMessage(message))
        },
        onChange: e => {
            dispatch(updateInput(e.target.value))
        }
    }
}

const MessageScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesDisplay)

export default MessageScreen;

