import React from 'react'
import { Card } from 'react-bootstrap'
const Footers = () => {
  return (
    <div>
      <div style={{backgroundColor:"#3b3a3a",height:"50px",color:"#fff",position:'relative',bottom:'0px' }}>
    
      <Card.Body style={{borderRadius: '0px! important '}}>
       
        <Card.Text className='text-center' style={{position: 'relative',top: '20px'}}>
         Copyright  Dashboard &copy; 2021
        </Card.Text>
        
      </Card.Body>
    </div>
    </div>
  )
}

export default Footers
