import React, { useState, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import Link from "next/link";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((setter) => (event) => {
    setter(event.target.value);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    let hasError = false;
    setLoading(true);

    // Validate email and password
    if (email.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is required!',
      });
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
      });
      hasError = true;
    }

    if (password.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is required!',
      });
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const { data: loginData } = await axios.post(
        "https://dashboard.cowdly.com/api/users/login/",
        { email, password } 
      );

      const token = loginData?.token;
      if (token) {
        Cookies.set("token", token, { expires: 2, secure: true, sameSite: "strict" });
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'An error occurred while logging in. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="bg-gray-50 w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-6 bg-gray-700 rounded-3xl text-white w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-2">Sign in to your account</h1>
        <form className="space-y-6 w-full" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block mb-2 text-xl font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-2 text-xl font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              placeholder="Enter your password"
              className="bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? <Eye size={25} weight="bold" /> : <EyeClosed size={25} weight="bold" />}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-400 text-xl">Remember me</label>
            </div>

            <Link href="#" className="text-xl font-medium text-primary-600 hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="bg-primary-500 w-full py-2 font-bold rounded-2xl text-white hover:bg-blue-300 transition duration-150"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
