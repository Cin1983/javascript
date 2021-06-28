import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <Test />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
