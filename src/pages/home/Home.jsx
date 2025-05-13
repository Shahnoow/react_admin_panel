import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/nabar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="erarning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
