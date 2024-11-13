import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex gap-2 justify-center items-center bg-base-200 p-2">
        <button className="px-3 py-2 bg-[#D72050] text-white">Latest</button>

        <Marquee pauseOnHover={true} speed={50} className="space-x-10">
          <Link>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            pariatur fuga iure? .
          </Link>
          <Link>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            pariatur fuga iure?
          </Link>
          <Link>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            pariatur fuga iure?
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
