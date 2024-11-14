import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSide from "../Components/Layout Components/LeftSide";
import MainNews from "../Components/Layout Components/MainNews";
import RightSide from "../Components/Layout Components/RightSide";
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

      {/* Main Content */}
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 py-5">
        <section className="col-span-3">
          <LeftSide></LeftSide>
        </section>
        <section className="col-span-6">
          <MainNews></MainNews>
        </section>
        <section className="col-span-3">
          <RightSide></RightSide>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
