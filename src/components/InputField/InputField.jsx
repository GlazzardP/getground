import React from "react";
import styles from "./InputField.module.scss";
import TextField from '@material-ui/core/TextField';


class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {

    return (
      <>
        <TextField id="standard-basic" label={this.props.label} type="text" placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange} />
      </>
    );
  }
}
export default InputField;
