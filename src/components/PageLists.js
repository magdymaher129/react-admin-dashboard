import React from "react";
import { Table, Card } from "react-bootstrap";
const pages = [
  {
    id: "1",
    page: "posts",

    published: true,
  },
  {
    id: "2",
    page: "users",

    published: true,
  },
  {
    id: "3",
    page: "pages",

    published: true,
  },
  {
    id: "4",
    page: "services",

    published: false,
  },
];

const PageLists = () => {
  return (
    <div>
      <Card>
        <Card.Header
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          Pges List
        </Card.Header>
        <input
          type='text'
          placeholder='Filter pages ...'
          style={{ marginBottom: "10px", width: "95%", marginLeft: "20px" }}
        />
        <Table
          striped
          hover
          bordered
          style={{ maxWidth: "90%", marginLeft: "2rem" }}
        >
          <thead>
            <tr className='row text-center'>
              <th className='col-md-2 col-sm-12'>#</th>
              <th className='col-md-6 col-sm-12 '> page</th>
              <th className='col-md-2 col-sm-12'>published</th>
              <th className='col-md-2 col-sm-12'> </th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => {
              return (
                <tr key={page.id} className='row text-center'>
                  <td className='col-md-2 col-sm-12'>{page.id}</td>
                  <td className='col-md-6 col-sm-12 '>{page.page}</td>

                  <td className='col-md-2 col-sm-12 '>
                    {page.published ? (
                      <i class='fa fa-check' aria-hidden='true'></i>
                    ) : (
                      <i class='fa fa-times' aria-hidden='true'></i>
                    )}
                  </td>
                  <td className='col-md-2 col-sm-12'>
                    <div className='row px-3 '>
                      <button className='btn btn-success my-1 col-12'>
                        {" "}
                        <i class='fa fa-pencil' aria-hidden='true'></i>
                      </button>
                      <button className='btn btn-danger my-1 col-12'>
                        {" "}
                        <i class='fa fa-times' aria-hidden='true'></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default PageLists;
