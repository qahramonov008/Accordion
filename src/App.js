import "./App.css";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="App">
      <Accordion
        title="Section 1"
        content="This is the content of section 1."
      />
      <Accordion
        title="Section 2"
        content="This is the content of section 2."
      />
    </div>
  );
}

export default App;
