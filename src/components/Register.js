import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <section className="h-screen bg-slate-500 flex items-center">
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-6">
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
                    className="form-input w-full border-none focus:outline-none"
                    placeholder="Name"
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
                    className="form-input w-full border-none focus:outline-none"
                    placeholder="Email"
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
                    className="form-input w-full border-none focus:outline-none"
                    placeholder="Password"
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
                  Have already an account?{" "}
                  <a
                    href="/login"
                    className="font-bold text-blue-500 underline"
                  >
                    Login Here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
