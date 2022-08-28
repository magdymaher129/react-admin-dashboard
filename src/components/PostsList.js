import React from 'react'
import {Table,Card} from 'react-bootstrap'
const posts=[
    {
        id:"1",
        Title: "c# tutorials ",
        descriptions: "Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        published: true,
    },
    {
        id:"2",
        Title: "f# tutorials ",
        descriptions: "Lorem ipsum  ",
        published: false,
    },
]
  
const PostsList = () => {
    return (
        <div>
         <Card   >
          <Card.Header style={{ backgroundColor:'#dc3545',color:'#fff',marginBottom:'10px' }}>Posts List</Card.Header>
         <input type="text" placeholder="Filter posts ..."  style={{ marginBottom:'10px',width:'95%',marginLeft:'20px' }}/>
           <Table striped  hover bordered style={{ width:'95%',marginLeft:'2%' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>descriptions</th>
              <th>published</th>
    <th></th>
            </tr>
          </thead>
          <tbody>
          {posts.map(post => {
    
        return (    <tr key={post.id} >
              <td style={{width:'5%'}}>{post.id}</td>
              <td style={{width:'15%'}}>{post.Title}</td>
              <td style={{wordWrap: 'breakWord',width:'15%'}}>{post.descriptions}</td>
              <td  className='text-center' style={{wordWrap: 'breakWord',width:'15%'}}>{post.published?<i class="fa fa-check" aria-hidden="true"></i>:<i class="fa fa-times" aria-hidden="true"></i>}</td>
              <td style={{width:'15%'}}><div className='row px-3 '><button className='btn btn-success col-10 my-2' style={{width:'80px',marginRight:'10px'}} > Edit</button>
      <button className='btn btn-danger col-10'style={{width:'80px'}}> Delete</button></div></td>
            </tr>)
          }
         
         )}{
          
         }
    
          </tbody>
        </Table>
        </Card>
        </div>
      )
    }


export default PostsList
