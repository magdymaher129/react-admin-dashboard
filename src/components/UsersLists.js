import React from 'react'
import {Table,Card} from 'react-bootstrap'
const users=[
    {
        id:"1",
        FirstName: "John",
        SecondName: "Doe",
        email: "john@example.com",
    },
    {
      id:"2",
      FirstName: "mark",
      SecondName: "peter",
      email: "peter@example.com",
  },
  {
    id:"3",
    FirstName: "sam",
    SecondName: "neil",
    email: "sam@example.com",
  },
  {
    id:"4",
    FirstName: "well",
    SecondName: "smith",
    email: "smith@example.com",
  },
    
  ]
const UsersLists = () => {
  return (
    <div>
      <Card  >
      <Card.Header style={{ backgroundColor:'#dc3545',color:'#fff',marginBottom:'10px' }}>Users List</Card.Header>
      <input type="text" placeholder="Filter users ..."  style={{ marginBottom:'10px',width:'95%',marginLeft:'20px' }}/>
       <Table striped bordered hover  style={{ width:'95%',marginLeft:'2%' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => {

return (    <tr key={user.id} style={{height:'50px'}}>
      <td style={{width:'5%'}}>{user.id}</td>
      <td style={{width:'15%'}}>{user.FirstName}</td>
      <td style={{width:'15%'}}>{user.SecondName}</td>
      <td  style={{ width:'15%' }}>{user.email}</td>
     <td style={{width:'15%'}}> <div className='row px-4 ' ><button className='btn btn-success col-10 my-2' style={{width:'80px',marginRight:'10px'}} > Edit</button>
      <button className='btn btn-danger col-10'style={{width:'80px'}}> Delete</button></div></td>
    </tr>)
  }
 
 )}{
  
 }
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Mark@gmail.com</td>
          <td className='text-center'><button className='btn btn-success mx-2 '> Edit</button><button className='btn btn-danger'> Delete</button></td>
         
         
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>fat@gmail.com</td>
          <td className='text-center'><button className='btn btn-success mx-2 '> Edit</button><button className='btn btn-danger'> Delete</button></td>
         
         
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>larry@gmail.com</td>
          <td className='text-center'><button className='btn btn-success mx-2 '> Edit</button><button className='btn btn-danger'> Delete</button></td>
   
        </tr>
        <tr>
          <td>4</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>Thornton@gmail.com</td>
          <td className='text-center'><button className='btn btn-success mx-2 '> Edit</button><button className='btn btn-danger'> Delete</button></td>
         
        </tr> */}
      </tbody>
    </Table>
    </Card>
    </div>
  )
}

export default UsersLists
