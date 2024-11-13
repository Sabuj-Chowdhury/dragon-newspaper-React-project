import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* Latest section */}
      <LatestNews></LatestNews>
    </div>
  );
};

export default HomeLayout;
