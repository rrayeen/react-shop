import { useSelector } from "react-redux";

function Footer() {
  const { cart } = useSelector((store) => store.cartSlice);

  return (
    <footer
      className={` tracking-widest font-semibold text-slate-50 flex items-center justify-center px-4 py-3 bg-raisin-black col-span-full`}
    >
      {cart.length ? <p>{cart.length} Product</p> : ""}
    </footer>
  );
}

export default Footer;
