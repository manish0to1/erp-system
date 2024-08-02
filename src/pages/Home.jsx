import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <>
      <section className="h-screen bg-slate-500 flex items-center">
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-6 h-[300px]">
              <h2 className="text-center text-2xl font-bold mb-8 pb-10">
                <p>
                  Welcome <span className="text-cyan-600">{userName.name}</span>
                </p>
                to
                <div>ERP or Enterprise Resource Planning Plateform</div>
              </h2>
              <div className="flex justify-center relative -inset-0bottom-2">
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
    </>
  );
};

export default Home;
