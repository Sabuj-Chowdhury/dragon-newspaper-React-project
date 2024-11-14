import { useLoaderData } from "react-router-dom";
import MainNewsCard from "./MainNewsCard";

const MainNews = () => {
  const { data: news } = useLoaderData();
  //   console.log(news);

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>

      <div className="space-y-5">
        {news.map((singleNews) => (
          <MainNewsCard key={singleNews._id} news={singleNews}></MainNewsCard>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
