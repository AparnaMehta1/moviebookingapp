import React from "react";
import {FaUserAlt} from "react-icons/fa";
//import {AiOutlineUserAdd} from "@react-icons/all-files/fa/FaBeer";
//import {} from "react-icons/fi";
function Login() {
  return (
    <div className="text-5  flex justify-center align-center      bg-yellow-900  p-5">
      <div className=" flex  flex-col bg-red-300  rounded-2xl  bg-active-black p-4 shadow-2xl ">
        <div>
          <FaUserAlt className= " flex justify-center align-center text-7xl " />
          <h1 className="font-bold p-2 text-4xl">Login</h1>
        </div>
        <div>
          <input
            className="p-2 my-2 rounded-lg border-2 border-gray-500 bg-orange-50 text-black hover:border-4 border0gray-600"
            type="text"
            placeholder="User ID"
          />
        </div>
        <div>
          <input
            className="p-2 my-2 rounded-lg border-2 border-gray-500 bg-orange-50 text-black hover:border-4 border-gray-600"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button
            className="p-2 px-3 my-2 bg-purple-100 rounded-2xl  text-lg border-2 border-indigo-500/75 border-solid hover:shadow-lg hover:border-4 border-green-900 border-solid"
            type="submit"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
