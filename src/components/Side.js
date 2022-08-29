import React from 'react';
import {ListGroup,Badge}  from 'react-bootstrap';
const Side = () => {
  return (
    <div  >
       <ListGroup defaultKey="#link1" >
    <ListGroup.Item action href="#link1" style={{backgroundColor:'#dc3545',color:'#fff',fontWeight:'bold'}}>
    <i className="fa fa-gear"></i> Dashboard
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled style={{fontSize:'1.4rem'}}>
    <i className="fa fa-list-alt" aria-hidden="true"></i>  pages


    <Badge pill bg="secondary"  style={{position: "absolute",right: "10px"}}>
        20 
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item action href="#link3" disabled style={{fontSize:'1.4rem'}}>
    <i className="fa fa-pencil" aria-hidden="true"></i> posts
    <Badge pill bg="secondary"  style={{position: "absolute",right: "10px"}}>
        200 
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item  style={{fontSize:'1.4rem'}}>
    <i className="fa fa-user" aria-hidden="true"></i> users
    <Badge pill bg="secondary"  style={{position: "absolute",right: "10px"}}>
        80 
      </Badge>
    </ListGroup.Item>
  </ListGroup>,
    </div>
  )
}

export default Side
