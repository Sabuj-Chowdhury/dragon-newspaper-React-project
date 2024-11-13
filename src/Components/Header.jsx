import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-5">
      {/* Logo */}
      <div>
        <img className="w-96" src={logo} alt="" />
      </div>
      <p className="text-gray-400">Journalism without Fear or Favour </p>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
    </div>
  );
};

export default Header;
