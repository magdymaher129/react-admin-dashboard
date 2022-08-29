import React from "react";
import Footers from "../components/Footers";
import Navbars from "../components/Navbars";
import Panel from "../components/Panel";
import Side from "../components/Side";
import TabledData from "../components/TabledData";
import Used from "../components/Used";


const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbars />

        <div className='row' style={{ margin: "40px 5px  5px 5px"}}>
          <div className='col-md-3 col-xs-12'>
            <Side />
          </div>
          <div className='col-md-9 col-xs-12'>
            <Panel />
          </div>
        </div>
        <div className='row' style={{ margin: "10px 5px  5px 5px" , minHeight: 'calc(100vh - 50px)' }}>
          <div className='col-md-3 col-xs-12'>
            <Used />
          </div>
          <div className='col-md-9 col-xs-12'>
            <TabledData />
          </div>
        </div>
      </header>
      <Footers />
    </div>
  );
};

export default Home;
