import React from "react";
import styles from "./InputField.module.scss";
import TextField from '@material-ui/core/TextField';
import { useDispatch } from "react-redux";

const InputField = (props) => {
  const {label, placeholder, type} = props;
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({
      type: "authorChanged", payload: e.target.value
    })
  }

  return (
    <TextField id="outlined-basic" className={styles.TextField} label="Outlined" variant="outlined" placeholder={placeholder} label={label} type={type} onChange={onChange}/>
  );
};

export default InputField;



// class InputField extends React.Component {
//   render() {

//   const dispatch = useDispatch();

//   const onChange = (e) => {
//     dispatch({
//       type: "authorChanged", payload: e.target.value
//     })
//   }


//     return (
//       <TextField id="outlined-basic" className={styles.TextField} label="Outlined" variant="outlined" placeholder={this.props.placeholder} label={this.props.label} type={this.props.type} onChange={onChange}/>
//     );
//   }
// }

// export default InputField;
