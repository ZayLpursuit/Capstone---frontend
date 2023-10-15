import "./BusinessPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import ShowMap from "../ShowMap";

import Comments from "../Comments";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import StarRating from "../StarRating";

const API = process.env.REACT_APP_API_URL;
const API_key = process.env.REACT_APP_GOOGLE_API_KEY;

const Show = ({
  setFavs,
  favs,
  currentUser,
  findBusinessByPlaceId,
}) => {
  const [key, setKey] = useState("description");
  const [favorite, setFavorite] = useState(false);
  let { id } = useParams();
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // const [showComments, setShowComments] = useState(false);

  const placeId = findBusinessByPlaceId(Number(id) - 1);

  const [business, setBusiness] = useState([]);
  const [businessDataFromAPI, setBusinessDataFromAPI] = useState([]);

  useEffect(() => {
    const backendData = axios.get(`${API}/businesses/${id}`);
    const googleData = axios.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?&place_id=${placeId}&key=${API_key}`
    );

    Promise.all([backendData, googleData])
      .then((res) => {
        // console.log(res)
        // console.log(res.data["result"])
        setBusiness(res[0].data);
        placeId && setBusinessDataFromAPI(res[1].data["result"]);
      })
      .catch((c) => console.error("catch", c));
  }, [placeId]);

  // console.log(
  //   "data from api",
  //   businessDataFromAPI,
  //   "data from backend",
  //   business
  // );

  const {
    name,
    address,
    contact_num,
    year_opened,
    img,
    website,
    description,
    is_store,
  } = business;

  const handleAdd = (newComment) => {
    axios
      .post(`${API}/businesses/${id}/comments`, newComment)
      .then(
        (response) => {
          setComments([response.data, ...comments]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/businesses/${id}/comments/${id}`)
      .then(
        (response) => {
          const copyCommentArray = [...comments];
          const indexDeletedComment = copyCommentArray.findIndex((comment) => {
            return comment.id === id;
          });
          copyCommentArray.splice(indexDeletedComment, 1);
          setComments(copyCommentArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedComment) => {
    axios
      .put(
        `${API}/businesses/${id}/comments/${updatedComment.id}`,
        updatedComment
      )
      .then((response) => {
        const copyCommentArray = [...comments];
        const indexUpdatedComment = copyCommentArray.findIndex((comment) => {
          return comment.id === updatedComment.id;
        });
        copyCommentArray[indexUpdatedComment] = response.data;
        setComments(copyCommentArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  function addToFavorites() {
    console.log(currentUser.uid);
    axios.post(`${API}/users/user/${currentUser.uid}/favorites`, business);
  }

  return (
    <div className="BusinessPage">
      <img src={img} alt={name} />
      <div className="BusinessPage__Details">
        <h1>
          {name || businessDataFromAPI.name}
          <Button
            variant="warning"
            onClick={() => {
              setFavorite(!favorite);
              addToFavorites();
            }}
          >
            {!favorite ? (
              <i className="fa-regular fa-star" id="unfavorite"></i>
            ) : (
              <i className="fa-solid fa-star" id="favorite"></i>
            )}
          </Button>
        </h1>
        <StarRating rating={businessDataFromAPI.rating } />
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
                  {!is_store ? (
                    <a href={website ? website : "N/A"} target="*">
                      Online Only
                    </a>
                  ) : (
                    <a href={`http://maps.google.com/?q=${name}`} target="*">
                      {businessDataFromAPI.formatted_address || address}
                    </a>
                  )}
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Website: </h4>
              </td>
              <td>
                <h5>
                  <a href={website ? website : "N/A"} target="*">
                    {website}
                  </a>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Phone Number: </h4>
              </td>
              <td>
                <h5>{businessDataFromAPI.formatted_phone_number || contact_num || "N/A"}</h5>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="BusinessPage__Map"></div>
      </div>
      <div className="BusinessPage__Description">
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="description" title="Description">
            {description}
          </Tab>
          <Tab
            eventKey="comments"
            title={<Comments comments={businessDataFromAPI.reviews} />}
          >
            {businessDataFromAPI.reviews?.map((comment, index) => (
              <Comment
                key={index}
                comment={comment}
                handleDelete={handleDelete}
                handleSubmit={handleEdit}
              />
            ))}
            <>
              <Button onClick={() => setShowForm(!showForm)} variant="dark">
                {!showForm ? "Add A New Comment" : "Hide Form"}
              </Button>

              {showForm && <CommentForm handleSubmit={handleAdd}></CommentForm>}
            </>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Show;
