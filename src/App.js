import "./App.css";
import Button from "./components/Button";
import Input from "./components/Login";
import {
  Container,
  InputContainer,
  ErrorText,
  ErrorBorder,
} from "./components/Login/styled";

function App() {
  return (
    <>
      {/* <div className="container">
        <div className="primary-button">
          <p>Primary</p>

          <Button $type="primary" disabled >Disabled</Button>
        </div>

       
        <div className="primary-button">
          <p>Secondary</p>
          <Button $type="Secondary" $width='30%'>Default</Button>
        </div>

        <div className="primary-button">
          <p>Gray</p>
          <Button $type="Gray">Default</Button>
        </div>
      </div> */}




      {/* Login  */}
      <Container>
        {/* default  */}
        <InputContainer>
          <p>Default</p>
          <i className="fa-solid fa-circle-user"></i>
          <Input $type="Default" error="false"  ></Input>
        </InputContainer>

        {/* password  */}
        <InputContainer>
          <p>Password</p>

          <Input $type="Password"></Input>
        </InputContainer>

        {/* Name  */}
        <InputContainer>
          <p>Name</p>
          <Input $type="Name"></Input>
        </InputContainer>
      </Container>
    </>
  );
}

export default App;
