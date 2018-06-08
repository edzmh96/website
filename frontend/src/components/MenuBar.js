import React, { Component } from 'react';
import './MenuBar.css';
import Robot from '../svgs/Robot';
import Icon from '../svgs/Icon';
import { CSSTransitionGroup } from 'react-transition-group'

// const MenuBarButton = ({active, onButtonClick}) => {
//     return (
//         <div className="menuButton" onClick={onButtonClick}>
//             <div className={`menuIcon ${active ? "active" : ""}`}/>
//         </div>
//     )
// }

const ProjectsButton = ({active, initial, onClick}) => {
    return (
        <div className={`menuButton first ${active ? "active" : "inactive"} ${initial? "initial" : ""}`} onClick={onClick}>
            <span className={`iconText first ${initial? "initial" : ""}`}>Projects</span>
            <Icon className={`icon ${active ? "active" : ""}`}/>
        </div>
    )
}

const ChatbotButton = ({active, initial, onClick}) => {
    return (
        <div className={`menuButton second ${active ? "active" : "inactive"} ${initial? "initial" : ""}`} onClick={onClick}>
            <span className={`iconText second ${initial? "initial" : ""}`}>Chatbot</span>
            <Robot className={`robot ${active ? "active" : ""}`} />
        </div>
    )
}

class MenuBar extends Component {
    render() {
        const props = this.props;
        const { initial, project, bot } = props.display;
        return (
            <div className="menuBar">
                    <ProjectsButton initial={initial} active={project} onClick={(e) => {this.props.onClickProjects(e)}}/>
                    <ChatbotButton initial={initial} active={bot} onClick={(e) => {this.props.onClickBot(e)}}/>
            </div>
            )
    }
}

export default MenuBar;