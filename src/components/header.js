import React,{Fragment} from "react";
import Footer from "./footer";
import "./footer.css";

class Header extends React.Component {
  state = {
    items: [
      { id: 1, name: "magdy", country: "Uk", count: 2 },
      { id: 2, name: "Maher", country: "USA", count: 1 },
      { id: 3, name: "Zekrey", country: "INDIA", count: 4 },
      { id: 4, name: "Samir", country: "TURKEY", count: 5 },
      { id: 5, name: "Moraad", country: "Egypt", count: 3 },
      { id: 6, name: "Mona", country: "Sudan", count: 31 },
    ],
  };
  // delete row----------------------------------------------------
  delete(x) {
    const cc = this.state.items.filter((item) => item.id !== x);
    this.setState({
      items: cc,
    });
  }
  // delete row----------------------------------------------------
  add() {
    let id;
    if (this.state.items.length === 0) {
      id = 1;
    } else {
      id = this.state.items[this.state.items.length - 1].id + 1;
    }

    let name = document.getElementById("valname").value;
    let country = document.getElementById("valcountry").value;
    let arr = this.state.items;
    if (name !== "" && country !== "") {
      arr.push({ id: id, name: name, country: country, count: 1 });
    } else {
      alert("one ore more items is empty");
    }
    this.setState({
      items: arr,
    });

    document.getElementById("valname").value = "";
    document.getElementById("valcountry").value = "";
  }
  // store Data
  render() {
    const xx = this.state.items;

    const yy = xx.map((item) => {
      return item.count > 0 ? (
        <tr key={item.id} className='item'>
          <td> {item.id}</td>
          <td>{item.name} </td>
          <td>{item.country}</td>
          <td>
            <button className='btn' onClick={() => this.delete(item.id)}>
              Delete
            </button>
          </td>
        </tr>
      ) : null;
    });

    return (
 <div>
        <Footer test={yy} />
        <Fragment >
        <table><tbody>
        <tr className='item'>
          <td></td>
          <td>
            <input type='text' className='input' id='valname' />
          </td>
          <td>
            {" "}
            <input type='text' className='input' id='valcountry' />
          </td>
          <td>
            <button className='btn1' onClick={() => this.add()}>
              Add
            </button>
          </td></tr></tbody></table>
        </Fragment>
     </div>
    );
  }
}

export default Header;
