import React from "react";
import { Card } from "react-bootstrap";
const Panel = () => {
  return (
    <div>
      <Card style={{ height: "40%" }}>
        <Card.Header style={{ backgroundColor: "#dc3545", color: "#fff" }}>
          Featured
        </Card.Header>
        <div className='row  mx-3 my-2'>
          <div className='col-md-3  panelBox'>
            <h4>
              <i class='fa fa-list-alt' aria-hidden='true'></i> 20
            </h4>
            <h4> pages</h4>
          </div>

          <div className='col-md-2  panelBox'>
            <h4>
              <i class='fa fa-pencil' aria-hidden='true'></i> 200
            </h4>
            <h4> Posts</h4>
          </div>
          <div className='col-md-2  panelBox'>
            <h4>
              <i class='fa fa-user' aria-hidden='true'></i> 20
            </h4>
            <h4> Users</h4>
          </div>
          <div className='col-md-3  panelBox'>
            <h4>
              <i class='fa fa-bar-chart' aria-hidden='true'></i> 80.871
            </h4>
            <h4> vistors</h4>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Panel;
