import { Component } from "react";
import { FormField } from "./FormField/FormField";
import { FormMessage } from "./FormMessage/FormMessage";
import { SendButton } from "./SendButton/SendButton";

import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div id="contact-form">
        <FormField />
        <FormField />
        <FormField />
        <FormMessage />
        <SendButton />
      </div>
    );
  }
}

export default Form;
