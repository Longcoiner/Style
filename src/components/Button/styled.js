import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

const size = {
  sm: "14px",
  base: "16px",
  lg: "20px",
};

const color = {
  primaryColor: '#ffff',
  secondaryColor: '#FF0000',
  GrayColor:'#ffff',
}

const width ={
  primaryWidth: '50%',
  secondaryWidth:'70%',
  grayWidth:'100%',
}


export const ButtonBase = styled.button`
  font-family: Roboto;
  display: block;
  background-color: #ff0000;
  color: ${(props) => props.$color ==='primaryColor' ? color.primaryColor : props.$color && props.$color === 'secondaryColor' ? color.secondaryColor : props.$color && props.$color === 'GrayColor' ? color.GrayColor : props.$color} ;
  padding: 8px, 24px, 8px, 24px;
  border: none;
  border-radius: 4px;
  line-height: 24px;
  font-weight: 700;
  height:40px;
  width: ${(props) => props.$width === 'sm' ? width.primaryWidth : props.$width && props.$width === 'base' ? width.secondaryWidth: props.$width && props.$width === "lg" ? width.grayWidth : props.$width };
  font-size: ${(props) => props.$size === 'sm' ? size.sm : props.$size && props.$size === 'base'? size.base : props.$size && props.$size === 'lg' ? size.lg: props.$size };
  margin-bottom: 10px;
  &:hover {
    width: 200px;
    background-color: rgba(255, 0, 0, 0.7);
    color: #FFFFFF;
  }
  &:active {
    width:170px;
    background-color: #C20000;
    color: #FFFFFF;
  }
  &:disabled {
    width:110px;
    background-color: #999999;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color:transparent;
  border: 2px solid #FF0000;
  &:hover {
    width: 200px;
    font-size:14px;
    background-color:transparent;
    border: 2px solid #FF0000;
    color: #FF0000;
  }
  &:active {
    width:170px;
    font-size:14px
    background-color:transparent;
    border: 2px solid #FF0000;
    color: #FF0000;
  }
  &:disabled {
    width:110px;
    background-color:transparent;
    border: 2px solid #999999;
    color: #999999;
  }
`;

// gray
export const GrayButton = styled(ButtonBase)`
  background-color: #ff0000;
  &:hover {
    width: 100%;
    background-color: rgba(255, 0, 0, 0.7);
    color: #ffffff;
  }
  &:active {
    background-color: #c20000;
    color: #ffffff;
  }
  &:disabled {
    width: 100%;
    background-color: #999999;
    color: #ffffff;
  }
`;
