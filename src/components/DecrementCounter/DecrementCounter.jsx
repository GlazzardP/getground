import React from "react";
import styles from "./DecrementCounter.module.scss";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const DecrementCounter = (props) => {
  const { val } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <Button
      id="decrement-button"
      className="button"
      onClick={onClick}
      value={val}
    >
      Previous Page
    </Button>
  );
};

export default DecrementCounter;
