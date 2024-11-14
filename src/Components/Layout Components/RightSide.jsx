import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

import one from "../../assets/qZone1.png";
import two from "../../assets/qZone2.png";
import three from "../../assets/qZone3.png";

const RightSide = () => {
  return (
    <div>
      {/* container */}
      <div className="mb-5">
        <h2 className="font-semibold text-xl mb-2">Login With</h2>
        <div className="*:w-full space-y-2">
          <button className="btn">
            <FcGoogle />
            Login with Google
          </button>
          <button className="btn">
            <IoLogoGithub />
            Login with GitHub
          </button>
        </div>
      </div>
      {/* Container */}
      <div className="mb-5">
        <h2 className="font-semibold text-xl mb-2">Find Us on</h2>
        <div className="flex flex-col space-y-2">
          <button className="btn">
            <FaFacebookSquare />
            FaceBook
          </button>
          <button className="btn">
            <FaInstagramSquare />
            Instagram
          </button>
          <button className="btn">
            <FaSquareXTwitter />
            Twitter
          </button>
        </div>
      </div>

      {/* Container */}
      <div className="mb-5 bg-base-200 p-5">
        <h2 className="font-semibold text-xl mb-2">Q-Zone</h2>
        <div className="flex flex-col space-y-2">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
        </div>
      </div>

      {/* Container */}
      <div className="bg-aside-bg h-[500px] "></div>
    </div>
  );
};

export default RightSide;
