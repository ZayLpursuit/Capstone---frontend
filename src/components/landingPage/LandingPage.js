import "./LandingPage.scss";
import { Link } from "react-router-dom";
import CulturalFacts from "../culturalFacts/CulturalFacts";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingPage__mission-statement">
        <section className="landingPage__statement">
          <h1>Our Mission</h1>
          <h3>
            To support and promote black-owned businesses by creating a platform
            for consumers to connect with them, with the goal of increasing
            their visibility and helping them thrive. They aim to promote
            entrepreneurship and economic equity within the black community,
            ultimately building a better and more inclusive economy for all.
          </h3>
        </section>
      </div>
      <CulturalFacts />
      <div className="landingPage__featured">
        <h1>Featured Businesses</h1>
        <section>
          <div>
            <h4>Sylvia's, Located In Harlem Has Been Open For 61 Years!</h4>
            <Link to="/businesses/9">
              <img
                src="https://www.nycgo.com/images/videos/84544/sylvias-restaurant-thumbnail__large.jpg"
                alt="sylvia's restuarant"
              />
            </Link>
          </div>
          <div>
            <h4>Chelle's Hair Closet, an online boutique for luxury hair!</h4>
            <Link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0582/8129/6044/products/IMG_6927.jpg?v=1680658083/project/avatar/3880238/Temp.png"
                alt="chelle's"
              />
            </Link>
          </div>
          <div>
            <h4>
              Bobby's, located In Queens Has Been Open For More Than 30 Years!
            </h4>
            <Link to="/">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPxOuirfJ6-ThGsBmPt6x9x7GStuiyTKS0ZnrE=s1360-w1360-h1020"
                alt="bobby's restaurant"
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
