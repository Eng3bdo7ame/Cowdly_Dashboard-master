import React, { useState, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { useI18nContext } from "../context/i18n-context";
import { Link, useNavigate } from "react-router-dom";
import { ErrorAlert } from "../../form/Alert";

const Login = () => {
  const { language, t } = useI18nContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((setter) => (event) => {
    setter(event.target.value);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    let hasError = false;
    setLoading(true);

    if (username.trim() === "") {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, username: "" }));
    }

    if (password.trim() === "") {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const { data: loginData } = await axios.post(
        "https://store-system-api.gleeze.com/api/auth/login",
        { username, password }
      );

      const token = loginData.token;
      Cookies.set("token", token, { expires: 2, secure: true, sameSite: "strict" });

      const { data: userData } = await axios.get(
        "https://store-system-api.gleeze.com/api/Users/getMe",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { role, shop: userShop } = userData.data;
      localStorage.setItem('shop', userShop);

      if (role === "customer") {
        window.location.href = "/shopping";
      } else if (role === "manager") {
        window.location.href = "/HomeManager";
      } else if (role === "user") {
        window.location.href = "/Home";
      } else if (!userShop && role === "admin") {
        window.location.href = "/createShop";
      } else {
        window.location.href = "/Home";
      }
    } catch (error) {
      ErrorAlert({
        text: error.response?.data?.message || "Error LogIn",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="secondary border-2 parentDiv shadow-md w-96" dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="flex flex-col gap-2 p-3 items-center w-full text-white">
          <h1 className="font-medium text-base">{errors.username || errors.password}</h1>
          <h1 className="font-semibold text-center pdarkForm plightForm text-2xl secondaryF">{t("Home.Login")}</h1>
        </div>
        <form onSubmit={handleLogin} className="p-8 darkForm lightForm relative">
          <div className="space-y-8">
            <div className="right-1">
              <label htmlFor="username" className={`block font-semibold absolute top-0 py-0 px-1 secondaryF ${language === "ar" ? "rtl" : "ltr"}`}>
                {language === "en" ? "Username" : t("Home.Username")}
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleInputChange(setUsername)}
                name="username"
                className={`w-80 darkForm lightForm px-3 py-3 border-2 secondaryF bg-gray-900 rounded-md focus:border-blue-400 outline-none ${errors.username ? "border-red-500" : "border-gray-200"} placeholder:tracking-wide mb-2`}
                placeholder={language === "en" ? "Enter your username" : t("Home.Username")}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div className="relative right-1">
              <label htmlFor="password" className={`block font-semibold absolute -top-8 py-1 px-1 secondaryF ${language === "ar" ? "rtl" : "ltr"}`}>
                {language === "en" ? "Password" : t("Home.Password")}
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handleInputChange(setPassword)}
                name="password"
                className={` ${language === "ar" ? "rtl" : "ltr"} relative w-80 darkForm lightForm px-3 py-3 border-2 text-white bg-gray-900 rounded-md focus:border-blue-400 outline-none ${errors.password ? "border-red-500" : "border-gray-200"} placeholder:tracking-wide`}
                placeholder={language === "en" ? "Enter your password" : t("Home.Password")}
              />

              <div className={`${language === "ar" ? "rtl" : "ltr"} absolute top-full my-2 tracking-wide mx-0 cursor-pointer text-lg font-bold text-gray-500 hover:text-gray-800`}>
                <Link to="/forgotPassword">{t("Home.ForgetPass")}</Link>
              </div>
              <div className={`absolute top-1/2 text-gray-700 px-3 -translate-y-1/2 cursor-pointer ${language === "en" ? "left-64" : "right-64"}`} onClick={toggleShowPassword}>
                {showPassword ? <Eye size={25} weight="bold" /> : <EyeClosed size={25} weight="bold" />}
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <button type="submit" className={`${language === "ar" ? "rtl" : "ltr"} secondaryBtn w-80 border-2 font-semibold ease-linear duration-150 rounded-md py-2 tracking-wide mt-5`}>
              {loading ? `${t("Home.Loading")}` : t("Home.Login")}
            </button>
          </div>
          <Link to="/signup">{t("Home.IdontHaveAccount")}</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
