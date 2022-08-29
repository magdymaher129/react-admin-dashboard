import React from "react";
import { Table, Card } from "react-bootstrap";
const posts = [
  {
    id: "1",
    Title: "c# tutorials ",
    descriptions:
      "Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    published: true,
  },
  {
    id: "2",
    Title: "f# tutorials ",
    descriptions: "Lorem ipsum  ",
    published: false,
  },
  {
    id: "3",
    Title: "f# tutorials ",
    descriptions: "Lorem ipsum  ",
    published: false,
  },
];

const PostsList = () => {
  return (
    <div>
      <Card>
        <Card.Header
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Posts List
        </Card.Header>
        <input
          type='text'
          placeholder='Filter posts ...'
          style={{ marginBottom: "0.8rem", width: "95%", marginLeft: "0.8rem" }}
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
              <th className='col-md-2 col-sm-12'>Title</th>
              <th className='col-md-4 col-sm-12'>descriptions</th>
              <th className='col-md-2 col-sm-12'>published</th>
              <th className='col-md-2 col-sm-12'></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr key={post.id} className='row text-center'>
                  <td className='col-md-2 col-sm-12'>{post.id}</td>
                  <td className='col-md-2 col-sm-12'>{post.Title}</td>
                  <td
                    className='col-md-4 col-sm-12'
                    style={{ wordWrap: "breakWord" }}
                  >
                    {post.descriptions}
                  </td>
                  <td
                    className='text-center col-md-2 col-sm-12'
                    style={{ wordWrap: "breakWord" }}
                  >
                    {post.published ? (
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

export default PostsList;
