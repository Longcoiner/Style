import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Arial';
    width:800px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin-top:100px;
   
    
`;
export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px dashed purple;
  padding: 10px 10px;
  width: 30%;
  margin-bottom:40px;
`;

export const Title =styled.p`
text-align: center;
font-size: 15px;
font-weight: 800;
opacity: 0.5;
position: relative;
top: -50px;
`;





export const ErrorText = styled.span`
    font-family: 'Gloria Hallelujah', cursive;
    color: red;
    font-size:12px;
    font-weight:700;
    letter-spacing: 0.5px;
`;



export const TextInput = styled.input`
border: 1px solid ;
border-color: ${(props)=> props.error ? 'red':'#333333'};
background-color: transparent;
border-radius: 5px;
padding: 8px 10px;
font-weight:700;
width: ${(props) => props.$width && props.$width };

&::placeholder {
    font-weight:400;
    line-height:24px;
    font-size:16px;
    color:#333333;
};

&:focus {
  outline: none;
};
&:disabled{
    color: #C1C1C1;
    cursor: not-allowed;
    background-color:transparent ;
};
`;




export const DefaultInput=styled(TextInput)`

    
    

`;

export const PasswordInput=styled(TextInput)`


`;

export const NameInput=styled(TextInput)`


`;