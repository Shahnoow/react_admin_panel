import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/nabar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <Featured />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
