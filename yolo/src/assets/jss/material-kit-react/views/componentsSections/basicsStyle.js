import { container, title } from "../../../material-kit-react";
import customCheckboxRadioSwitch from "../../../material-kit-react/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0",
    backgroundColor: "#F8F8F8"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },paper: {
    height: 300,
    width: 300,
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
