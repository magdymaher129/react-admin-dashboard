import React from 'react'
import {ProgressBar,ListGroup} from 'react-bootstrap'
const Used = () => {
    const now=80
    const band=40
  return (
   
        <div  >
       <ListGroup defaultKey="#link1" >
    <ListGroup.Item action href="#link1" style={{backgroundColor:'#dc3545',color:'#fff',fontWeight:'bold'}}>
    <i class="fa fa-line-chart" aria-hidden="true"></i> Utils
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
   Used Disk Space

<br></br><br></br>
      <ProgressBar now={now} label={`${now}%`} variant="dark"/>;
    
    </ListGroup.Item>
    <ListGroup.Item action href="#link3" disabled>
BandsWidth Used
<br></br><br></br>
<ProgressBar now={band} label={`${band}%`} variant="dark"/>;
    </ListGroup.Item>
   
  </ListGroup>

    </div>

  )
}

export default Used
