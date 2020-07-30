import React from "react";
import "./custom-button.style.scss";
import { CustomButtonContainer } from "./custom-button.styles";
const CustomButton = (
  { children, ...props } // children, isGoogleSignIn,.. la khai bao props cho component
) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
