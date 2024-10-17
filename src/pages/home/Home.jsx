import "./Home.css";
import Intro from "./Intro";
import Latest from "./Latest";
// import SideBar from "./SideBar";
// import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <div className="">
        <div>
          {/* <Slider /> */}
          <Latest />
          <Intro />
        </div>
        <div>
          {/* <SideBar /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
