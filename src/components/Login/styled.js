import styled from "styled-components";

export const Container = styled.div`
  font-family: "Arial";
  width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-top: 100px;
`;
export const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  border: 1px dashed purple;
  padding: 10px 10px;
  width: 100%;
  margin-bottom: 40px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  opacity: 0.5;
  position: relative;
  top: -50px;
  right: -16%;
`;

export const GroupIcon = styled.div`
  display: flex;
  position: absolute;
  width: ${(props) => props.$width && props.$width};
  border-right: 1px solid red;
  height: 40px;
`;

export const MaterialIcon = styled.i`
  classname: ${(props) => props.$className && props.$className};
`;

export const Icon = styled(MaterialIcon)`
  width: ${(props) => props.$width && props.$width};
  height: 40px;
  display: inline-block;
  top: 30%;
`;

export const ErrorText = styled.span`
  font-family: "Gloria Hallelujah", cursive;
  color: red;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const TextInput = styled.input`
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : "#333333")};
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 0px 10px 25px;
  font-weight: 700;
  width: ${(props) => props.$width && props.$width};

  &::placeholder {
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
    color: #333333;
  }

  &:focus {
    outline: none;
  }
  &:disabled {
    color: #c1c1c1;
    cursor: not-allowed;
    background-color: transparent;
  }
`;

export const DefaultInput = styled(TextInput)``;

export const PasswordInput = styled(TextInput)``;

export const NameInput = styled(TextInput)``;








const color ={
  defaultColor:'#C1C1C1',
  hoverColor:'#333333',
  errorColor: '#BC0000'
}




export const Wrapper = styled.div`
width: 343px;
height: 40px;
display: flex;
align-items: center;
border: 1px solid ;
border-color: ${(props)=>props.error ?  `${color.errorColor}`: `${color.defaultColor}`};
margin-bottom:10px;
border-radius: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 56px;
  border-right: 1px solid;
  border-right-color: ${(props)=>props.error ? `${color.errorColor}`: `${color.defaultColor}`};
  svg > path {
    fill: ${(props) => props.error ? `${color.errorColor}`: `${color.hoverColor}`};
  padding: 0 4px;
`;

export const InputArea = styled.input`
  font-size:16px;
  font-weight:700;
  line-height:24px;
  padding: 0 10px;
  width:100%;
  border: none;
  outline: none;
  &::placeholder{
    font-weight:400;
    font-size:16px;
    padding:0 6px;
  }
  &:disabled {
    color: black;
    cursor: not-allowed;
    background-color: transparent;
  }
`;

export const Label =styled.label`
    font-size:14px;
    font-weight:700;
    letter-spacing:0.5px;
    line-height:18px;
    color:#333333;
    padding: 10px 0;
`;
