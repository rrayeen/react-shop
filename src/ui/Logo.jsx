import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className=" text-center">
      <Link to="/">
        <img
          src="/devices.png"
          alt="devices"
          className=" w-auto h-32  bg-slate-900    rounded-full"
        ></img>
      </Link>
    </div>
  );
}

export default Logo;
