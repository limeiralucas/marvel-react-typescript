import React from "react";

import "./textInput.css";

interface TextInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.SFC<TextInputProps> = ({ placeholder, onChange }) => (
  <input
    className="text-input"
    type="text"
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextInput;
