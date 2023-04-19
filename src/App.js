import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";

const App = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  const checkLoginFunc = () => {
    let data = localStorage.getItem("jaypee-token");
    if (data) {
      setCheckLogin(true);
    }
  };
  useEffect(() => {
    checkLoginFunc();
  }, []);
  return (
    <div>
      <Sidebar checkLogin={checkLogin} />
    </div>
  );
};

export default App;
