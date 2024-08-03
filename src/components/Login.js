import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/SU.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      loggedUser &&
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      alert("Wrong email or password!");
    }
  };

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
            className="rounded-lg shadow-lg p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <h2 className="text-center text-2xl font-bold mb-8 pb-10">
              Login Here
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-5 pb-5">
                <input
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="email"
                  id="email"
                  className="form-input w-full border-none focus:outline-none py-2 px-2 rounded-xl"
                  placeholder="email"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  required
                />
              </div>
              <div className="mb-5 pb-10">
                <input
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="password"
                  id="password"
                  className="form-input w-full border-none focus:outline-none py-2 px-2 rounded-xl"
                  placeholder="Password"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg"
                >
                  Login
                </button>
              </div>
              <p className="text-center mt-5 text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="font-bold text-blue-500 underline"
                >
                  Register Here.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
