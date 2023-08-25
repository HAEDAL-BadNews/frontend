import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ReturnArticles from "../components/Contents/ReturnArticles";
import { useLocation } from "react-router-dom";

const header_height = "101px";

const ReturnPage = (props) => {
  const [txtvalue, settxtValue] = useState([]);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  function propFunction(text) {
    settxtValue(text);
  }

  return (
    <div
      className="MainPage"
      style={{ display: "flex", height: `calc(100% - ${header_height})` }}
    >
      <Sidebar propFunction={txtvalue} />
      <ReturnArticles news={location} />
    </div>
  );
};

export default ReturnPage;
