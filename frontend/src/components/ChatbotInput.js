import React, { Component } from 'react';
import './ChatbotInput.css';

class ChatbotInput extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;

    this.setState({
      inputValue: value
    });
  }

  render() {
    const { inputValue } = this.state;
    const { mode } = this.props;
    return (
      <div className={`input-wrapper ${mode}`}>
        <input
          onChange={this.onInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder='Say Hi!'
          value={inputValue}
          spellCheck={false}
          />
      </div>
    );
  }
}

export default ChatbotInput;
