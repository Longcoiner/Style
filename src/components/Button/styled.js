import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

const size = {
  sm: "14px",
  base: "16px",
  lg: "20px",
};

const color = {
  primaryColor: "#ffff",
  secondaryColor: "#FF0000",
  GrayColor: "#ffff",
};

export const ButtonBase = styled.button`
  display: block;
  background-color: #ff0000;
  color: ${(props) =>
    props.$color && props.$color };
  padding: 8px, 24px, 8px, 24px;
  border: none;
  border-radius: 4px;
  line-height: 24px;
  font-weight: 700;
  height: 40px;
  width: ${(props) => props.$width && props.$width};
  font-size: ${(props) =>
    props.$size === "sm"? size.sm: props.$size && 
    props.$size === "base"? size.base: props.$size && 
    props.$size === "lg"? size.lg: props.$size};
  margin-bottom: 10px;
`;

// PrimaryButton 
export const PrimaryButton =styled(ButtonBase)`
&:hover {
  background-color: rgba(255, 0, 0, 0.7);
  color: #ffffff;
}
&:active {
  background-color: #c20000;
  color: #ffffff;
}
&:disabled {
  cursor: not-allowed;
  background-color: #999999;
}
`;

// SecondButton 
export const SecondaryButton = styled(ButtonBase)`
  background-color:transparent;
  border: 2px solid #FF0000;
  color: ${color.secondaryColor};
  &:hover {
    background-color:transparent;
    border: 2px solid #FF0000;
    color: #FF0000;
  }
  &:active {
    background-color:transparent;
    border: 2px solid #FF0000;
    color: #FF0000;
  }
  &:disabled {
    
    background-color:transparent;
    border: 2px solid #999999;
    color: #999999;
  }
`;

// grayButton
export const GrayButton = styled(ButtonBase)`
  color:${color.GrayColor};
  background-color: #ff0000;
  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
    color: #ffffff;
  }
  &:active {
    background-color: #c20000;
    color: #ffffff;
  }
  &:disabled {
    background-color: #999999;
    color: #ffffff;
  }
`;

export const NewButton = styled(ButtonBase)``;
