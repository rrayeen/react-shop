import { Outlet } from "react-router-dom";

function Account() {
  return (
    <div className="flex items-center justify-center h-dvh w-full">
      <Outlet></Outlet>
    </div>
  );
}

export default Account;
