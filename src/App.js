import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div className="primary-button">
          <p>Primary</p>

          <Button>Disabled</Button>
        </div>

        {/*  */}
        <div className="primary-button">
          <p>Secondary</p>
          <Button $type="Secondary" $width='30%'>Default</Button>
        </div>

        <div className="primary-button">
          <p>Gray</p>
          <Button $type="Gray">Default</Button>
        </div>
      </div>
    </>
  );
}

export default App;
