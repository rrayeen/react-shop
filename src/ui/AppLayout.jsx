import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function AppLayout() {
  const { cart } = useSelector((store) => store.cartSlice);

  return (
    <div className="grid h-dvh  grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto]">
      <Header></Header>

      <SideBar></SideBar>
      <main className=" overflow-scroll col-span-full md:col-auto w-full h-full overflow-x-hidden bg-lavender-blush overflow-y-auto  ">
        <Outlet></Outlet>
      </main>
      {cart.length ? <Footer></Footer> : ""}
    </div>
  );
}

export default AppLayout;
