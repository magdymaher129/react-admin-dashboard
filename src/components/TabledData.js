import React from "react";
import { Table, Card } from "react-bootstrap";

const users = [
  {
    id: "1",
    FirstName: "John",
    SecondName: "Doe",
    email: "john@example.com",
  },
  {
    id: "2",
    FirstName: "mark",
    SecondName: "peter",
    email: "peter@example.com",
  },
  {
    id: "3",
    FirstName: "sam",
    SecondName: "neil",
    email: "sam@example.com",
  },
  {
    id: "4",
    FirstName: "well",
    SecondName: "smith",
    email: "smith@example.com",
  },
];

const TabledData = () => {
  console.log(users[0].id);
  return (
    <div>
      <Card>
        <Card.Header style={{ backgroundColor: "#dc3545", color: "#fff" }}>
          Last emails{" "}
        </Card.Header>
        <Table
          striped
          bordered
          hover
          style={{ maxWidth: "90%", marginLeft: "2rem" }}
        >
          <thead>
            <tr className='row text-center'>
              <th className='col-md-2 col-sm-12'>#</th>
              <th className='col-md-3 col-sm-12'>First Name</th>
              <th className='col-md-3 col-sm-12'>Last Name</th>
              <th className='col-md-4 col-sm-12'>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id} className='row text-center'>
                  <td className='col-md-2 col-sm-12'>{user.id}</td>
                  <td className='col-md-3 col-sm-12'>{user.FirstName}</td>
                  <td className='col-md-3 col-sm-12'>{user.SecondName}</td>
                  <td className='col-md-4 col-sm-12'>{user.email}</td>
                </tr>
              );
            })}
            {}

            {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Mark@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>fat@gmail.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>larry@gmail.com</td>
        </tr>
        <tr>
          <td>4</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>Thornton@gmail.com</td>
        </tr> */}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default TabledData;
