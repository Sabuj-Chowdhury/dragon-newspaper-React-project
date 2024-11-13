import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="flex justify-between items-center">
        <div></div>
        <div className="space-x-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="career">Career</Link>
        </div>
        <div className="flex items-center gap-4">
          {/* userIcon */}
          <div>
            <img className="w-14 h-14" src={userIcon} alt="" />
          </div>
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
