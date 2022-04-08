import "./App.css";
// import Button from "./components/Button";
import Input from "./components/Login";
import { Container, InputContainer, Icon, Title } from "./components/Login/styled";

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
        <form>
            <Title>Default</Title>
          <InputContainer>
            <Input $type="default" disabled error />
          </InputContainer>

          {/* password  */}
            <Title>Password</Title>
          <InputContainer>
            <Input $type="password"  />
          </InputContainer>

          {/* Name  */}
            <Title>Name</Title>
          <InputContainer>
            <Input $type="name"  />
          </InputContainer>
        </form>
      </Container>
    </>
  );
}

export default App;
