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

const Show = ({ setFavs, favs, currentUser, business }) => {
  // const [business, setBusiness] = useState([]);
  // const { name, address, contact_num, year_opened, is_online, is_store, img, category, website, description } = business;

  const [key, setKey] = useState("description");
  const [favorite, setFavorite] = useState(false);
  const [apiData, setApiData] = useState([])
  let { id } = useParams();
  // const [, setComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // const [showComments, setShowComments] = useState(false);

  // console.log("comment", <Comments/>)

  let currentBusiness = business.find((bus) => bus.id === Number(id))

  const { name, address, contact_num, year_opened, img, website, description } =
  currentBusiness;

  // console.log(currentBusiness)

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?&place_id=${currentBusiness["place_id"]}&key=${API_key}`)
    .then((res) => {
      // console.log(res.data["result"])
      setApiData(res.data["result"])
    })
      .catch((c) => console.error("catch", c));
  }, [id]);

  console.log(apiData.reviews)

  // useEffect(() => {
  //   axios.get(`${API}/businesses/${id}/comments`).then((response) => {
  //     // console.log(response.data)
  //     setComments(response.data);
  //     // console.log(comments)
  //   });
  // }, [id]);

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
          {name}
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
        <StarRating />
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
                <h5>{contact_num ? contact_num : "N/A"}</h5>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="BusinessPage__Map">
          {/* <ShowMap business={business}/> */}
        </div>
      </div>
      <div className="BusinessPage__Description">
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="description" title="Description">
            {description}
          </Tab>
          <Tab eventKey="comments" title={<Comments comments={apiData.reviews} />}>
            {apiData.reviews?.map((comment, index) => (
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

              {showForm && (
                <CommentForm
                  handleSubmit={handleAdd}
                ></CommentForm>
              )}
            </>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Show;
