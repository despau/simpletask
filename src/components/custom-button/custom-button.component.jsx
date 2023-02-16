import * as React from 'react';
import { CustomButtonStyles } from './custom-button.styles';


const CustomButton = ({label, type, onClick}) => {
  return (
    <CustomButtonStyles type = {type} onClick={ onClick} >{label}</CustomButtonStyles>
  )
};

export default CustomButton;
