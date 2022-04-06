import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const ButtonBase = styled.button`
  display: block;
  background-color: red;
  color: #ffff;
  padding: 5px 10px;
  border: none;
  border-radius: 5%;
  width: ${(props) => props.$width && props.$width};
  font-size: ${(props) => props.$size && props.$size};
  margin-bottom: 10px;
  &:hover {
    background-color: #ccc;
    color: black;
  };
  &:active {
    background-color: blue;
    color: red;
  };
  &:disabled {
    background-color: #ddd;
  };
`;

export const SecondaryButton = styled(ButtonBase)`
  &:hover {
    background-color: green;
    color: black;
  }
  &:active {
    background-color: yellow;
    color: black;
  }
  &:disabled {
    background-color: #ddd;
    color: black;
  }
`;

// gray
export const GrayButton = styled(ButtonBase)`
    &:hover {
      background-color: blue;
      color: black;
    }
    &:active {
      background-color: yellow;
      color: red;
    }
    &:disabled {
      background-color: #ddd;
      color: black;
    }
`;


