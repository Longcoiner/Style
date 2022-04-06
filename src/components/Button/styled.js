import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const ButtonBase = styled.button`
  font-family: Roboto;
  height:40px;
  display: block;
  background-color: #ff0000;
  color: #ffff;
  padding: 8px, 24px, 8px, 24px;
  border: none;
  border-radius: 4px;
  line-height: 24px;
  font-weight: 700;
  width: ${(props) => props.$width && props.$width};
  font-size: ${(props) => props.$size && props.$size};
  margin-bottom: 10px;
  &:hover {
    width: 93px;
    background-color: rgba(255, 0, 0, 0.7);
    color: #FFFFFF;
  }
  &:active {
    width:110px;
    background-color: #C20000;
    color: #FFFFFF;
  }
  &:disabled {
    width:105px;
    background-color: #999999;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color:transparent;
  border: 2px solid #FF0000;
  color:#FF0000;
  &:hover {
    background-color:transparent;
    border: 2px solid #FF0000;
    color: #FF0000;
  }
  &:active {
    width:120px;
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

// gray
export const GrayButton = styled(ButtonBase)`
  background-color:#FF0000;
  &:hover {
    width:100%;
    background-color: rgba(255, 0, 0, 0.7);
    color: #FFFFFF;
  }
  &:active {
    background-color: #C20000;
    color: #FFFFFF;
  }
  &:disabled {
    width:100%;
    background-color: #999999;
    color: #FFFFFF;
  }
`;
