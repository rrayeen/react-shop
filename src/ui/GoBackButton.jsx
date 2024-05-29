import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { TiArrowBack } from "react-icons/ti";
import { FaHome } from "react-icons/fa";

function GoBackButton({ others, type = "back" }) {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      others={`flex items-center gap-1 ${others}`}
      onClick={() => {
        if (type === "back") navigate(-1);
        else navigate("/");
      }}
    >
      {type === "back" ? (
        <>
          <TiArrowBack /> Go back
        </>
      ) : (
        <>
          <FaHome />
          Home
        </>
      )}
    </Button>
  );
}

export default GoBackButton;
