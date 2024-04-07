"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Email from "../../public/email.svg";
import Lock from "../../public/lock.svg";
import Logo from "../../public/ibadanAgentlogo.svg";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/toastSlice";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/services/mutationApi";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";
import { Checkbox } from "@mui/material";
interface LoginCredentials {
  email: string;
  password: string;
}
interface SuccessResponse {
  status: boolean;
  message: string;
  data: any;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  useEffect(() => {
    // Load email from localStorage when the component mounts
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setFormData((prev) => ({ ...prev, email: storedEmail }));
    }
  }, []);

  const [errors, setErrors]: any = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate and set errors
    if (name === "email") {
      setErrors((prev: any) => ({
        ...prev,
        email: value.trim()
          ? isEmailValid(value)
            ? null
            : "Invalid email format"
          : "Email is required",
      }));
    } else if (name === "password") {
      setErrors((prev: any) => ({
        ...prev,
        password: value.trim() ? null : "Password is required",
      }));
    }
  };

  const loginMutation = useMutation<void, Error, LoginCredentials>({
    mutationFn: (credentials: LoginCredentials) => loginApi(credentials),
    onError: (error) => {
      console.log(error);
      dispatch(
        showToast({
          message: `Login failed`,
          type: "error",
        }),
      );
    },
    onSuccess: (s: unknown, _) => {
      const successResponse: any = s ;
      if (successResponse?.status === true) {
        dispatch(
          showToast({
            message: `${successResponse?.message}`,
            type: "success",
          }),
        );
        localStorage.setItem("ibadad-agent", successResponse?.data);
        router.replace("agents");
      }
    },
  });
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      localStorage.setItem("rememberedEmail", formData?.email);
    } else {
      const istrue = localStorage.getItem("rememberedEmail");
      if (istrue) {
        localStorage.removeItem("rememberedEmail");
      }
    }
  };
  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const loginFunc = () => {
    setErrors({}); // Clear previous errors
    if (!formData.email?.trim()) {
      setErrors((prev: any) => ({
        ...prev,
        email: "Email is required",
      }));
    } else if (!isEmailValid(formData.email)) {
      setErrors((prev: any) => ({
        ...prev,
        email: "Invalid email format",
      }));
    } else if (!formData.password) {
      setErrors((prev: any) => ({
        ...prev,
        password: "Password is required",
      }));
    } else {
      loginMutation.mutate(formData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="md:w-[619px] md:h-[650px] pl-[61px] bg-white shadow-lg pr-16 pt-[86px] pb-[84px] flex-col justify-center items-center"> */}
      <div className="lg:w-[619px] w-[90%] md:h-auto p-7 bg-white shadow-lg flex flex-col gap-2  items-stretch lg:items-center  rounded-[20px]">
        <div className=" w-full flex justify-center items-center">
          <Image src={Logo} alt="logo" className="w-auto h-auto" />
        </div>
        <div className="lg:w-[430px] text-center text-black lg:text-5xl text-3xl font-bold leading-[56px]">
          Welcome back, Admin
        </div>
        <div className="self-stretch text-center text-neutral-700 text-[15px] font-medium leading-normal">
          Enter your account details to proceed
        </div>
        <div className="flex-col justify-center items-center flex">
          <div className="flex-col w-full justify-start items-start gap-1 flex mt-6">
            <div>
              <span className="text-zinc-800 text-sm font-medium font-['General Sans'] leading-normal">
                Email address
              </span>
              <span className="text-red-800 text-sm font-medium leading-normal">
                *
              </span>
            </div>
            <div
              className={`w-full lg:w-[500px] h-[60px] p-4 rounded-[44px] bg-white ${errors?.email ? "border-red-500" : "border-[#B3E5C3]"}  text-base flex items-center justify-center gap-[10px] border border-r-2 `}
            >
              <span className="p-2 bg-[#F4F5FB] rounded-full">
                <Image src={Email} alt="" width={30} height={30} />
              </span>
              <input
                type="text"
                name="email"
                className={`input-form`}
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
            <div className="mt-3 w-full">
              <div>
                <span className="text-zinc-800 text-sm font-medium font-['General Sans'] leading-normal">
                  Password
                </span>
                <span className="text-red-800 text-sm font-medium leading-normal">
                  *
                </span>
              </div>
              <div
                className={`w-full lg:w-[500px] h-[60px] p-4 rounded-[44px] bg-white ${errors?.password ? "border-red-500" : "border-[#B3E5C3]"}  text-base flex items-center justify-center gap-[10px] border border-r-2 `}
              >
                <span className="p-2 bg-[#F4F5FB] rounded-full">
                  <Image src={Lock} alt="" width={30} height={30} />
                </span>
                <input
                  type="password"
                  name="password"
                  className="input-form"
                  placeholder="*****************"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
            <div className="flex items-center justify-center gap-2 mt-3">
              <Checkbox
                onChange={handleCheckboxChange}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
                sx={{
                  color: "#DDDDDD",
                  "&.Mui-checked": {
                    color: "green",
                    backgroundColor: "#fff", // Set checked background color to #fff
                  },
                }}
              />
              <span className="text-sm">Remember me</span>
            </div>
            <button
              onClick={loginFunc}
              disabled={loginMutation.isPending}
              className="w-full md:w-[500px] h-12 mt-7 bg-[#52ADA2] rounded-[44px] justify-center items-center"
            >
              {loginMutation.isPending ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                <span className="text-center text-white text-base font-semibold font-['General Sans'] leading-tight">
                  Sign in
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
