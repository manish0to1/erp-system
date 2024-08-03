import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/SU.jpg";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  if (!userName) {
    navigate("/login");
    return null;
  }

  return (
    <section className="h-screen flex items-center">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="w-full max-w-md">
          <div
            className="rounded-lg shadow-lg p-6 h-[300px] flex flex-col justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <h2 className="text-center text-2xl font-bold mb-8">
              <p>
                Welcome <span className="text-cyan-600">{userName.name}</span>
              </p>
              to
              <div>ERP or Enterprise Resource Planning Platform</div>
            </h2>
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
