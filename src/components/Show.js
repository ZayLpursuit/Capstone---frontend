import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShowMap from "./ShowMap";

// import Comments from "./Comments";
// import Comment from "./Comment";
// import CommentForm from "./CommentForm";
import StarRating from "./StarRating";

const API = process.env.REACT_APP_API_URL;

const Show = ({setFavs,favs,currentUser}) => {
  const [business, setBusiness] = useState([]);
  // const { name, address, contact_num, year_opened, is_online, is_store, img, category, website, description } = business;
  const { name, address, contact_num, year_opened, img, website, description } =
    business;

  const [key, setKey] = useState("description");
  const [favorite, setFavorite] = useState(false);
  let { id } = useParams();
  const [, setComments] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [showForm, setShowForm] = useState(false);
  // const [showComments, setShowComments] = useState(false);

  // console.log("comment", <Comments/>)

  useEffect(() => {
    // console.log(API)
    axios
      .get(`${API}/businesses/${id}`)
      .then((res) => {
        // console.log(res.data);
        setBusiness(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, [id]);

  useEffect(() => {

    axios.get(`${API}/businesses/${id}/comments`).then((response) => {
      // console.log(response.data)
      setComments(response.data);
      // console.log(comments)
    });
  }, [id]);

  function addToFavorites(){
    console.log(currentUser.uid)
    axios.post(`${API}/users/user/${currentUser.uid}/favorites`,business)
  }
  
  return (
    <div className="show-page">
      <div className="center-text">
        <img
          src={img}
          alt={name}
          height="400px"
          width="400px"
          className="show-img"
        />
      </div>

      <div className="top-section">
        

        <h1 className="show-header">
          {name}{" "}
          <StarRating/>
          <Button variant="warning" onClick={() =>{ setFavorite(!favorite); addToFavorites()}}>
            {!favorite ? (
              <i className="fa-regular fa-star" id="unfavorite"></i>
            ) : (
              <i className="fa-solid fa-star" id="favorite"></i>
            )}
          </Button>
        </h1>
        <Table bordered hover>
          <tbody>
            <tr>
              <td>
                <h4>Year Opened: </h4>
              </td>
              <td>
                <h5>{year_opened}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Location:</h4>
              </td>
              <td>
                <h5>
                  <a
                    href={address ? `http://maps.google.com/?q=${name}` : "N/A"}
                    target="*"
                    className="tb-link"
                  >
                    {address || "N/A"}
                  </a>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Website: </h4>
              </td>
              <td>
                <h5>
                  <a
                    href={website ? website : "N/A"}
                    target="*"
                    className="tb-link"
                  >
                    {website}
                  </a>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4 >Phone Number: </h4>
              </td>
              <td>
                <h5>{contact_num ? contact_num : "N/A"}</h5>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="show-page-map">
    <ShowMap business={business}/>
      </div>
      </div>
      <div className="bottom-section">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="description" title="Description" id="tab">
            {description}
          </Tab>
          {/* <Tab eventKey="comments" title={<Comments />}>
            {comments?.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                handleDelete={handleDelete}
                handleSubmit={handleEdit}
              />
            ))}
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
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Show;
