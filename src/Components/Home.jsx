import Navbar from "./Navbar";
import "./Styles.css";
import PlateImage from "../assets/home-banner-image.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner">
        <div className="content">
          <h1 className="primary-text">Your Favourite Fruit Delivered Hot & Fresh</h1>
          <p className="secondary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food
          </p>
          <button className="primary-button">Order Now <ArrowForwardIcon/> </button>
        </div>
          <img src={PlateImage} className="home-plate-image-container"/>
      </div>
      
    </div>
  );
}

export default Home;
