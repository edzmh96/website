import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import ChatbotInput from './ChatbotInput'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Zoom from '@material-ui/core/Zoom';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { MessageType } from '../reducers/actions'

const styles = theme => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    height: '60%',
    transition: theme.transitions,
  },
  messageList: {
    overflow: 'scroll',
    height: '80%',
  }
});

class MessageDisplay extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.inputRef.current) {
            ReactDOM.findDOMNode(this.inputRef.current).scrollIntoView()
        }
    }

    componentDidUpdate() {
        if (this.inputRef.current) {
            ReactDOM.findDOMNode(this.inputRef.current).scrollIntoView()
        }
    }
    render() {
        const { classes, messages, onEnterPressed, onChange, onBotReply, mode, inputValue } = this.props;
        return (
            <Zoom in={mode==='bot'} style={{ transitionDelay: mode==='bot'? 200: 0}}>
                <div className={classes.root} style={{ "marginTop": "-400px", "zIndex": "5"}}>
                    <List className={classes.messageList}>
                        { messages.map((message, i) =>
                            (<ListItem dense button className={classes.listItem} ref={i===messages.length-1 && this.inputRef}>
                                <ListItemText primary={`${message.type===MessageType.User? 'USER': 'BOT'}: ${message.message}`}/>
                            </ListItem>)) }
                    </List>
                    <Input placeholder="Say Hello!" onKeyPress={onEnterPressed} onChange={onChange} value={inputValue}/>
                </div>
            </Zoom>)
    }
}

export default withStyles(styles)(MessageDisplay);