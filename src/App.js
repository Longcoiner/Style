import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div className="primary-button">
          <p>Primary</p>
          <Button $type="primary" $width="50%" $size="20px" isDisabled >Default</Button>
        </div>

        {/*  */}
        <div className="primary-button">
          <p>Secondary</p>
          <Button $type="Secondary" $width="80%" $size="30px">Default</Button>
         
      
        </div>

        <div className="primary-button">
            <p>Gray</p>
            <Button $type="Gray" $width="100%" $size="30px">Default</Button>
            
        </div>

      </div>
    </>
  );
}

export default App;
