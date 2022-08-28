import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  // show Data
  state = {
    element: "",
    option: "",
  };

  //-------------------------------------
  handleChange = (e) => {
    if (e.target.value.length > 4) {
      this.setState({ element: e.target.value });
    } else {
      this.setState({ element: "-" });
    }
  };
  //---------------------------------------
  handleSelect = (e) => {
    if (e.target.value === "Monier") {
      this.setState({ option: e.target.value });
    } else {
      this.setState({ option: "-" });
    }
  };
  render() {
    const items = this.props.test;

    return (
      <div>
      
       
        <input type='text' onChange={this.handleChange} />
        <br></br>
        <select onChange={this.handleSelect}>
          <option value='Samir'>Samir</option>
          <option value='Zaki'>Zaki</option>
          <option value='Monier'>Monier</option>
        </select>
        <p>you write : {this.state.element}</p>
        <p>you select : {this.state.option}</p>
        <p>____________________________</p>
        <table>
        <tbody>
          <tr className="item">
            <th >No</th>
            <th>Name</th>
            <th>Country</th>
            <th></th>
          </tr>
          {items}
          </tbody>
        </table>
      </div>
    );
  }
}
