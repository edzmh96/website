import React, { Component } from 'react';
import './Screen.css';
import ChatbotInput from './ChatbotInput';

const Section = (props) => {
    const { mode, position } = props;
    return (
        <div className={`Section ${mode} _${position}`}>
            { (mode==="project") &&
                <div className="projectInfo">
                    <div className={"sectionMask"}>
                        <img src="./testpic.jpeg" />
                    </div>
                    <div className={"description"}>

                    </div>
                </div>
            }
        </div>
    )
}

class Screen extends Component {
    render() {
        const { initial, project, bot } = this.props.display;
        const className = (bot && "bot") || (project && "project") || (initial && "initial")
        const numSections = 6;
        const sections = []
        for(var i = 0; i < numSections; i++) {
            sections.push(<Section mode={className} position={i} key={i}/>);
        }
        return (
            <div className={`Screen ${ className }`}>
                {sections}
                <ChatbotInput mode={className} />
            </div>
        )
    }
}

export default Screen;