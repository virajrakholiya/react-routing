import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div>
      <nav className="bg-slate-300 flex justify-center">
        <NavLink className="p-3 py-3" to="/Home"  style={(e)=>{
            return {
                color: e.isActive?'red':''
            }
        }}>Home</NavLink>
        <NavLink className="p-3 py-3" to="/About" style={(e)=>{
            return {
                color: e.isActive?'red':''
            }
        }}>About</NavLink>
        <NavLink className="p-3 py-3" to="/User" style={(e)=>{
            return {
                color: e.isActive?'red':''
            }
        }}>User</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
