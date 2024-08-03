import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/SU.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // To store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name && input.email && input.password) {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
    } else {
      alert("Please fill in all fields.");
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
            className="rounded-lg shadow-lg p-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <h2 className="text-center text-2xl font-bold mb-6">
              Create an Account!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 pb-4">
                <input
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="text"
                  id="name"
                  className="form-input w-full border-none focus:outline-none py-2 px-2 rounded-xl"
                  placeholder="name"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  required
                />
              </div>
              <div className="mb-4 pb-4">
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
              <div className="mb-10 pb-4">
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
              <div className="flex justify-center mb-10">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-lg"
                >
                  Register
                </button>
              </div>
              <p className="text-center mt-5 text-gray-600 mb-8">
                Already have an account?{" "}
                <a href="/login" className="font-bold text-blue-500 underline">
                  Login Here.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
