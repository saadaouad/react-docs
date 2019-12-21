import React from "react";
import { ThemeContext } from "./ThemeContext";
import { MessageContext } from "./MessageContext";

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
          data-cy="context-button"
        >
          <MessageContext.Consumer>
            {({ message }) => message}
          </MessageContext.Consumer>
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
