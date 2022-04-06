import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div className="primary-button">
          <p>Primary</p>
          <Button $type="primary" $width="207px" $size="16px"  >
            Default
          </Button>
        </div>

        {/*  */}
        <div className="primary-button">
          <p>Secondary</p>
          <Button $type="Secondary" $width="100px" $size="16px" >
            Default
          </Button>
        </div>

        <div className="primary-button">
          <p>Gray</p>
          <Button $type="Gray" $width="100%" $size="16px" >
            Default
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
