import React from 'react'
import Footers from '../components/Footers'
import Navbars from '../components/Navbars'
import PageLists from '../components/PageLists'
import Side from '../components/Side'
import TabledData from '../components/TabledData'
import Used from '../components/Used'
import UsersLists from '../components/UsersLists'

const pages = () => {
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
      <PageLists />
        </div>
      </div>
     
    </header>
    <Footers />
  </div>
  )
}

export default pages
