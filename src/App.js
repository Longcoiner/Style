import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div className="primary-button">
          <p>Primary</p>
          <Button $type="primary">Default</Button>
          <Button $type="SecondPrimary">Hover</Button>
          <Button $type="ThirdPrimary">Pressed</Button>
          <Button $type="ThirdPrimary">Active</Button>
          <Button $type="FifthPrimary" disabled={true}>Disabled</Button>
        </div>

        {/*  */}
        <div className="primary-button">
          <p>Secondary</p>
          <Button $type="Secondary">Default</Button>
          <Button $type="SecondarySecond">Hover</Button>
          <Button $type="SecondaryThird">Pressed</Button>
          <Button $type="SecondaryThird">Active</Button>
          <Button $type="SecondaryFifth" disabled={true}>Disabled</Button>
      
        </div>

        <div className="primary-button">
            <p>Gray</p>
            <Button $type="Gray">Default</Button>
            <Button $type="SecondGray">Hover</Button>
            <Button $type="ThirdGray">Pressed</Button>
            <Button $type="ThirdGray">Active</Button>
            <Button $type="FifthGray" disabled={true}>Disabled</Button>
        </div>

      </div>
    </>
  );
}

export default App;
