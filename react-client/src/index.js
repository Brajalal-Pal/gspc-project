import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// class Main extends React.Component {
//    constructor() {
//       super();
//       this.state = { name: "hey" }
//    };

//    render() {
//       return <div>
//          hello this.setState.name="hello"
//       </div>;
//    }
// }
ReactDOM.render(<App />, document.getElementById("root"));
