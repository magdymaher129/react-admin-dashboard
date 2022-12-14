import React from "react";
import Footers from "../components/Footers";
import Navbars from "../components/Navbars";
import Side from "../components/Side";
import TabledData from "../components/TabledData";
import Used from "../components/Used";
import UsersLists from "../components/UsersLists";

const users = () => {
  return (
    <div className='App'>
      <Navbars />

      <div
        className='row'
        style={{ margin: "40px 5px  5px 5px", minHeight: "calc(100vh - 50px)" }}
      >
        <div className='col-md-3'>
          <Side />
          <Used />
        </div>
        <div className='col-md-9'>
          <UsersLists />
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default users;
