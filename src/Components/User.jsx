import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className=" flex justify-center  items-center ">
     <div className="w-[600px] mt-10 flex-col flex gap-5" >
     <h1 className="text-5xl">User</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        numquam tenetur quisquam distinctio provident eaque maxime soluta harum.
        Dolor laborum cum harum ipsa repellendus atque voluptatem aliquid quas
        dignissimos cupiditate.
      </p>
      <Link to='/User/Jenish' className="p-3 bg-red-300 rounded-md w-[200px]">Jenish</Link>
      <Link to='/User/Viraj' className="p-3 bg-red-300 rounded-md w-[200px]">Viraj</Link>
      <Link to='/User/Brijesh' className="p-3 bg-red-300 rounded-md w-[200px]">Brijesh</Link>
     </div>
    </div>
  );
}

export default User;
