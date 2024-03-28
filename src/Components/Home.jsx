import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handler = ()=>{
    navigate('/About')
  }
  return (
    <div className=" flex justify-center  items-center ">
    <div className="w-[600px] mt-10 flex-col flex gap-5" >
    <h1 className="text-5xl">Home</h1>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
       numquam tenetur quisquam distinctio provident eaque maxime soluta harum.
       Dolor laborum cum harum ipsa repellendus atque voluptatem aliquid quas
       dignissimos cupiditate.
     </p>
     <button className="p-3 bg-red-300 rounded-lg w-32" onClick={handler}>Go to About</button>
    </div>
   </div>
  );
}

export default Home;
