import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div className="primary-button">
          <p>Primary</p>
          <Button $type="primary" $width="sm" $size="sm" $color="primaryColor" >
            Default
          </Button>
        </div>

        {/*  */}
        <div className="primary-button">
          <p>Secondary</p>
          <Button $type="Secondary" $width="base" $size="base" $color="secondaryColor">
            Default
          </Button>
        </div>

        <div className="primary-button">
          <p>Gray</p>
          <Button $type="Gray" $width="lg" $size="lg" $color="GrayColor" >
            Default
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
