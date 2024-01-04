import "./HomePage.scss";
import LandingPage from "../landingPage/LandingPage";

const HomePage = () => {
  return (
    <div className="HomePage">
      <img
        alt="smiles"
        src="https://www.lendio.com/wp-content/uploads/2020/11/male-female-black-businessowners-coffee.jpg"
      />
      <div className="HomePage__Motto">
        <h2>Embrace The Power Of Melanin</h2>
        <h2 className="HomePage__Motto__2"> Shop, Connect, Thrive!</h2>
      </div>
      <LandingPage />
    </div>
  );
};

export default HomePage;
