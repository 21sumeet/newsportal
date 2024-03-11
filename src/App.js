import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";

function App() {
  const [category, setcategory] = useState("india");
  const [darktheme, setdarkTheme] = useState(false);
  // const btn = () => {
  //   setdarkTheme(!darktheme);
  // };

  return (
    <div className={`min-h-screen ${darktheme ? "bg-slate-600" : "bg-white"}`}>
      <Navbar
        darktheme={darktheme}
        setdarkTheme={setdarkTheme}
        setcategory={setcategory}
      />
      <div className="p-4 md:p-8">
        <News darktheme={darktheme} category={category} />
      </div>
    </div>
  );
}

export default App;
