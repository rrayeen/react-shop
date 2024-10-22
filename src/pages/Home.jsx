import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Home() {
  return (
    <div className=" bg-home-page  h-screen w-full bg-contain md:bg-cover flex items-center justify-center gap-16 flex-col ">
      <Button type="home">
        <Link className="tracking-widest text-lg" to="categorie/all">
          Start navigating
        </Link>
      </Button>
    </div>
  );
}

export default Home;
