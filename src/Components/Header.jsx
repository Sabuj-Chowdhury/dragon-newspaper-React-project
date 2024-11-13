import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center py-5">
      {/* Logo */}
      <div>
        <img className="w-96" src={logo} alt="" />
      </div>
      <p className="text-gray-400">Journalism without Fear or Favour </p>
    </div>
  );
};

export default Header;
