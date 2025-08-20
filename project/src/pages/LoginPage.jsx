import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/reducers/clientSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
  rememberMe: yup.boolean(),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginStatus, loginError, user } = useSelector((state) => state.client);

  const savedEmail = localStorage.getItem("rememberedEmail") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: savedEmail,
      rememberMe: savedEmail !== "",
    },
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));

    if (data.rememberMe) {
      localStorage.setItem("rememberedEmail", data.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };

  useEffect(() => {
    if (loginStatus === "succeeded") {
      toast.success("Giriş başarılı!");
      navigate("/", { replace: true }); 
    }
  }, [loginStatus, user, navigate]);

  useEffect(() => {
    if (loginStatus === "failed" && loginError) {
      toast.error(loginError);
    }
  }, [loginStatus, loginError]);

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" {...register("rememberMe")} id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button
            type="submit"
            disabled={loginStatus === "loading"}
            className="bg-blue-500 text-white p-2 w-full disabled:bg-gray-400"
          >
            {loginStatus === "loading" ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
