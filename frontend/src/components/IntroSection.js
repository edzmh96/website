import React, { Component } from 'react';
import Typed from 'typed.js';
import shallowCompare from 'react-addons-shallow-compare';
import './IntroSection.css';

const introOptions = {
    strings: ["I make websites", "I make web apps", "I make videos"],
    smartBackspace: true,
    showCursor: false,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
}

const projectOptions = {
    strings: ["from the past or in progress."],
    smartBackspace: true,
    showCursor: false,
    typeSpeed: 50,
    backSpeed: 50,
    loop: false,
    loopCount: Infinity,

}

const chatbotOptions = {
    strings: ["this is a work in progress. Say Hello!"],
    smartBackspace: true,
    showCursor: false,
    typeSpeed: 50,
    backSpeed: 50,
    loop: false,
    loopCount: Infinity,
}

class IntroSection extends Component {
    componentDidMount() {
        const { initial, project, bot } = this.props.display;
        const options = (bot && chatbotOptions) || (project && projectOptions) || (initial && introOptions)
        this.typed = new Typed(this.el, options)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (shallowCompare(this, nextProps, nextState)) {
            this.typed.destroy();
            const { initial, project, bot } = nextProps.display;
            const options = (bot && chatbotOptions) || (project && projectOptions) || (initial && introOptions);
            this.typed = new Typed(this.el, options);
            return true;
        }
    }

    componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        const { initial, project, bot } = this.props.display;
        const text = (bot && "Chatbot") || (project && "Projects") || (initial && "Hi, I'm Edward")
        return (
            <div className={`IntroSection ${ initial ? "initial" : ""}`}>
                <h1 className={`${!initial? "active" : ""}`}>{text}</h1>
                <div className={`typed ${!initial? "active" : ""}`} ref={(el) => { this.el = el; }} />
            </div>
        )
    }
}

export default IntroSection