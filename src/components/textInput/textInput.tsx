import React from "react";
import { DebounceInput } from "react-debounce-input";

import "./textInput.css";

interface TextInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.SFC<TextInputProps> = ({ placeholder, onChange }) => (
  <DebounceInput
    minLength={2}
    debounceTimeout={300}
    className="text-input"
    type="text"
    placeholder={placeholder}
    onChange={onChange!}
  />
);

TextInput.defaultProps = {
  onChange: (ev) => void 0,
};

export default TextInput;
