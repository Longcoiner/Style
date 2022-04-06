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
  margin-bottom: 10px;
`;

export const SecondPrimary = styled(ButtonBase)`
  width: 30%;
  &:hover {
    background-color: #ccc;
    color: black;
  }
`;

export const ThirdPrimary = styled(ButtonBase)`
  width: 40%;
  background-color: #910c0c;
  &:active {
    background-color: #ccc;
    color: black;
  }
`;

export const FifthPrimary = styled(ButtonBase)`
  width: 50%;

  &:disabled {
    background-color: #ddd;
  }
`;

//  => {
//     return <StyledButton disabled={disabled}>Default label</StyledButton>;
// };
//

export const ButtonSecondary = styled(ButtonBase)`
  background: transparent;
  border: 1px solid red;
`;

export const Secondary = styled.button`
  display: block;
  background-color: none;
  color: red;
  font-weight: bold;
  padding: 10px 10px;
  border: 2px solid red;
  border-radius: 5%;
  width: ${(props) => props.$width && props.$width};
  margin-bottom: 10px;
`;

export const SecondarySecond = styled(Secondary)`
  font-size: 20px;
  :hover {
    background-color: #ccc;
    color: black;
  }
`;
export const ThirdSecond = styled(Secondary)`
  font-size: 10px;
  :active {
    background-color: #ccc;
    color: black;
  }
`;

export const FifthSecond = styled(Secondary)`
  font-size: 8px;
  border: none;
  &:disabled {
    background-color: #ddd;
    color: black;
  }
`;

// gray
export const Gray = styled(Secondary)`
  display: Block;
  with: 100%;
  background-color: #910c0c;
  font-size: 20px;
  color: #fff;
`;
export const SecondGray = styled(Secondary)`
  :hover {
    background-color: #ccc;
    color: black;
  }
`;
export const ThirdGray = styled(Secondary)`
  :active {
    background-color: #ccc;
    color: black;
  }
`;
export const FifthGray = styled(Secondary)`
  border: none;
  &:disabled {
    background-color: #ddd;
    color: black;
  }
`;
