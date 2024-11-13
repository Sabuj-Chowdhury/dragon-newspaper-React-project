import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <Header></Header>

      {/* Latest section */}
      <LatestNews></LatestNews>

      {/* Navbar */}
    </div>
  );
};

export default HomeLayout;
