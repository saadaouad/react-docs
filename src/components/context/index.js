import React, { Component } from "react";
import { ThemeContext, themes } from "./ThemeContext";
import { MessageContext, messages } from "./MessageContext";
import ThemeTogglerButton from "./ThemeTogglerButton";

class Context extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
        message:
          state.message === messages.revert ? messages.toggle : messages.revert
      }));
    };

    this.state = {  
      theme: themes.light,
      message: messages.toggle,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <div className="tc">
        <h2 data-cy="title">Context</h2>
        <ThemeContext.Provider value={this.state}>
          <MessageContext.Provider value={this.state}>
            <ThemeTogglerButton />
          </MessageContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Context;
