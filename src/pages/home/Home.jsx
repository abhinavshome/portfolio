import "./Home.css";
import Intro from "./Intro";
import SideBar from "./SideBar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <div className="content">
        <div style={{ width: "800px" }}>
          <Slider />
          <Intro />
        </div>
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
