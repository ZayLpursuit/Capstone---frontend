import React from 'react'
import { useState } from "react";
import { Button } from "react-bootstrap";
import CommentForm from "./CommentForm";

const Comment = ({ comment, handleDelete, handleSubmit, handleAdd }) => {
  const [viewEditForm, toggleEditForm] = useState(false);
  const [showForm, setShowForm] = useState(false);

    const toggleView = () => {
      toggleEditForm(!viewEditForm);
    };
  
    return (
      // <div className="Review">
      //   {viewEditForm ? (
      //     <CommentForm
      //       commentDetails={comment}
      //       toggleView={toggleView}
      //       handleSubmit={handleSubmit}
      //     />
      //   ) : (
            
          <section className="comment-section">
            {/* <ul> */}
              <li>{comment.commenter}: {comment.content}{" "}<Button variant="warning" onClick={toggleView}>
              {!viewEditForm ? "Edit" : "See Comment"}
            </Button>{" "}<Button variant="danger" onClick={() => handleDelete(comment.id)}>
              Delete
          </Button></li>
          <>
              <Button onClick={() => setShowForm(!showForm)} variant="dark">
                {!showForm ? "Add A New Comment" : "Hide Form"}
              </Button>

              {showForm && (
                <CommentForm
                  handleSubmit={handleAdd}
                ></CommentForm>
              )}
            </>

              {/* <li>{comment.content}</li> */}
            {/* </ul> */}
            {/* <Button variant="warning" onClick={toggleView}>
              {!viewEditForm ? "Edit" : "See Comment"}
            </Button>{" "} */}
            {/* <Button variant="danger" onClick={() => handleDelete(comment.id)}>
              Delete
            </Button> */}
      </section>
      

      //   )}
      // </div>
    );
}

export default Comment