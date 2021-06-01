import React from "react";
import styles from "./IncrementCounter.module.scss";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const IncrementCounter = (props) => {
  const { val } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  return (
    <Button
      variant="container"
      color="primary"
      id="increment-button"
      className="button"
      onClick={onClick}
      value={val}
    >
      Next Page
    </Button>
  );
};

export default IncrementCounter;
