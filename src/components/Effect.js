import React, { useEffect,useState } from "react";
import axios from "axios";

export default function Effect() {
  const [count,setCount]=useState(0)

const[arr,setArr]=useState([])

useEffect(()=>{
    console.log("effect")
    document.title=`you clicked ${count} times`
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
console.log(res.data)
        setArr(res.data)
})
})
const names=arr.map((x)=>{
    
      return  <p >  Email: {x.email}</p>
 })
  return <div>
    <p>you clicked {count} times</p>
    <button onClick={()=>{
      setCount(count+1)
    }}>Click me</button>
    <div>{names}</div>

  </div>;
}
