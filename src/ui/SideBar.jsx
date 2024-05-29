import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <div className="hidden  tracking-wider overflow-x-hidden border-b overflow-y-auto overflow-scroll font-medium text-slate-100  text-xl md:flex flex-col items-center gap-28 py-6 px-3 bg-raisin-black border-t border-slate-800    lg:w-72 2xl:w-80">
      <Logo></Logo>
      <MainNav></MainNav>
    </div>
  );
}

export default SideBar;
