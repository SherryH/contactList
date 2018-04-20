import React from "react";
import { render } from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return <div>hello world</div>;
  }
}

render(<HelloWorld />, document.getElementById("app"));
