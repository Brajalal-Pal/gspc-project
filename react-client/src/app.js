import Axios from 'axios';
import React, { Component } from 'react';
import { TableView } from "./components/TableView";
import { CardView } from "./components/CardView";

const ToggleView = (props) => {
   if (props.view === "table") {
      return <TableView {...props} />
   } else {
      return <CardView {...props} />
   }
}

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         view: "card"
      }
   }
   componentDidMount() {
      Axios.get("http://localhost:5000/gspc")
         .then(resp => {
            this.setState({
               data: resp.data
            });
         });
   }

   onToggleClick = () => {
      let view = this.state.view;
      if (view === "table") {
         this.setState({ view: "card" });
      } else {
         this.setState({ view: "table" });
      }
   }

   render() {
      return (
         <div className="container"><br />
            <button className="btn btn-primary" onClick={this.onToggleClick} type="button">Show in {this.state.view === "card" ? "Table View" : "Card View"}</button> (Click the button to Toggle between Tabular or Card View)
            <br /><br />
            <h1>Historical Data</h1>
            <ToggleView data={this.state.data} view={this.state.view} />
         </div>
      );
   }
}

export default App;