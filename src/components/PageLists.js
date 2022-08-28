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
          Pages List
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
          style={{ width: "95%", marginLeft: "2%" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>page</th>

              <th>published</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => {
              return (
                <tr key={page.id}>
                  <td style={{ width: "5%" }}>{page.id}</td>
                  <td style={{ width: "20%" }}>{page.page}</td>

                  <td className='text-center' style={{ width: "5%" }}>
                    {page.published ? (
                      <i class='fa fa-check' aria-hidden='true'></i>
                    ) : (
                      <i class='fa fa-times' aria-hidden='true'></i>
                    )}
                  </td>
                  <td style={{ width: "15%" }}>
                    {" "}
                    <div className='row px-4'>
                      <button
                        className='btn btn-success col-6 my-2'
                        style={{
                          width: "80px",
                          marginRight: "10px",
                          height: "40px",
                        }}
                      >
                        {" "}
                        Edit
                      </button>
                      <button
                        className='btn btn-danger col-6 my-2'
                        style={{ width: "80px", height: "40px" }}
                      >
                        {" "}
                        Delete
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
