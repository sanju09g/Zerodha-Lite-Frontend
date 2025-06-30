import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = not checked yet

  useEffect(() => {
     axios.get("http://localhost:5000/dashboard", { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(true);
       
      })
      .catch(() => {
        setIsAuthenticated(false); // ❌ Not logged in
        navigate("/login");
      });
  }, []);

  // ⛔ Show nothing until auth check completes
  if (isAuthenticated === null) return null;

  // ✅ If verified
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
