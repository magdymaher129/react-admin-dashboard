import React from 'react'
import Footers from '../components/Footers'
import Navbars from '../components/Navbars'
import PostsList from '../components/PostsList'
import Side from '../components/Side'
import TabledData from '../components/TabledData'
import Used from '../components/Used'

function Posts() {
  return (
    <div className='App'>
    <header className='App-header'>
      <Navbars />

      <div className='row' style={{ margin: "40px 5px  5px 5px" }}>
        <div className='col-md-3'>
          <Side />
          <Used />
        </div>
        <div className='col-md-9'>
       <PostsList/>
        </div>
      </div>
     
    </header>
    <Footers />
  </div>

  )
}

export default Posts
