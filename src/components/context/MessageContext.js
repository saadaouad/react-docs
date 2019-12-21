import React from "react";

export const messages = {
  toggle: "Toggle theme",
  revert: "Revert theme"
};

export const MessageContext = React.createContext({
  message: messages.toggle,
});
