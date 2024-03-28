import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Userdata() {
  const { name } = useParams();
  const navigate = useNavigate();

  const BackHandler = () => {
    navigate("/User");
  };
  return (
    <div className=" flex justify-center  items-center ">
      <div className="w-[600px] mt-10 flex-col flex gap-5">
        <h1 className="text-5xl">{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          numquam tenetur quisquam distinctio provident eaque maxime soluta
          harum. Dolor laborum cum harum ipsa repellendus atque voluptatem
          aliquid quas dignissimos cupiditate.
        </p>
        <button
          className="p-3 bg-red-300 rounded-lg w-32"
          onClick={BackHandler}
        >
          Go Back!
        </button>
      </div>
    </div>
  );
}

export default Userdata;
