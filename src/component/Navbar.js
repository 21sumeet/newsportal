import React from "react";
import { useState } from "react";

function Navbar({ setdarkTheme, darktheme, setcategory }) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    setcategory(searchInput);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const btn = () => {
    setdarkTheme(!darktheme);
  };
  return (
    <div
      className={`flex flex-col md:flex-row  items-center p-4 md:h-20 w-full ${
        darktheme ? "bg-slate-800" : "bg-slate-200"
      }`}
    >
      <div
        onClick={() => setcategory("india")}
        className={`logo mb-4 md:mb-0 md:ml-4 text-center md:text-left sm:text  cursor-pointer ${
          darktheme ? "text-white" : "text-black"
        }`}
      >
        News{" "}
        <span className="text-yellow-300 bg-red-800 p-1 rounded cursor-pointer">
          Pulse
        </span>
      </div>
      <div className="flex items-center md:ml-auto md:mr-4">
        <h4
          onClick={() => setcategory("sport")}
          className={`m-2 ${
            darktheme ? "text-white" : "text-black"
          } hover:text-red-700 cursor-pointer hidden md:block`}
        >
          Sport
        </h4>
        <h4
          onClick={() => setcategory("Finance")}
          className={`m-2 ${
            darktheme ? "text-white" : "text-black"
          } hover:text-red-700 cursor-pointer hidden md:block`}
        >
          Finance
        </h4>
        <h4
          onClick={() => setcategory("Politics")}
          className={`m-2 ${
            darktheme ? "text-white" : "text-black"
          } hover:text-red-700 cursor-pointer hidden md:block`}
        >
          Politics
        </h4>
      </div>
      <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full md:w-80 p-2 rounded"
          onKeyDown={handleKeyPress}
          placeholder="Search"
        />
        <button
          onClick={handleSearch}
          className={`ml-2 md:ml-4 p-2 rounded bg-blue-200 text-black-800`}
          aria-label="Search"
        >
          Search
        </button>
        <button
          onClick={btn}
          className={`ml-2 p-2 rounded focus:outline-none ${
            darktheme ? "bg-white text-gray-800" : "bg-gray-800 text-white"
          }`}
        >
          {darktheme ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
