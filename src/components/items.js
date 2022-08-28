import React, { Component,Fragment } from "react";
import axios from "axios";
import  './footer.css'
export default class componentName extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log(res.data);
      this.setState({
        users: res.data,
      });
    });
  }
  render() {
    const users=this.state.users
 const xx=   users.map((user)=>{
return<tr className="item" key={user.id}><td>{user.id}-</td><td>{user.name}</td><td>{user.email}</td><td className="tdcomment">{user.body}</td></tr>
 



    })

   return <div className="container"><p>Reviews of users comments</p> <table className="tb">
   <thead>
   <tr  className="item">
<th>Id</th><th>Name</th><th>Email</th> <th>Comments</th></tr> </thead>
 <tbody>{xx}</tbody>   </table></div>

 

  


  }
}




