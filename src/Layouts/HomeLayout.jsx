import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <Header></Header>

      {/* Latest section */}
      <LatestNews></LatestNews>

      {/* Navbar */}
      <Navbar></Navbar>
    </div>
  );
};

export default HomeLayout;
