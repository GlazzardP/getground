import React from "react";
import styles from "./Filters.module.scss";
import InputField from "../../components/InputField";


const Filters = () => {
  return (
    <div className={styles.searchBar}>
      <InputField placeholder={"Hosseini"} label={"Author"} type={"text"}/>
      <InputField placeholder={"2000"} label={"ID"} type={"number"} />
      <InputField placeholder={"The Kite Runner"} label={"Title"} type={"text"} stateType={"pageNo"}/>
    </div>
  );
};

export default Filters;
