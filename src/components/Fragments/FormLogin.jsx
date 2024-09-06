import company1 from "../../assets/company 1.png";
import company2 from "../../assets/company 2.png";
import company3 from "../../assets/company 3.png";
import company4 from "../../assets/company 4.png";
import company5 from "../../assets/company 5.png";
import company6 from "../../assets/company 6.png";
import orangJahit from "../../assets/orang jahit.png";
import googleLogo from "../../assets/google.png";
import fbLogo from "../../assets/fb.webp";
import Header from "../../components/Fragments/Header";
import React, { useState } from "react";
import Footer from "../../components/Fragments/Footer";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      password,
    };

    fetch("https://apiv2.alhifnywahid.xyz/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);

        if (res.status) {
          const userId = res.result;
          localStorage.setItem("id", userId);

          fetch(`https://apiv2.alhifnywahid.xyz/api/user/${userId}`)
            .then((res) => res.json())
            .then((userData) => {
              localStorage.setItem("name", userData.result.name);
              localStorage.setItem("email", userData.result.email);
              localStorage.setItem("phone", userData.result.phone_number);

              if (userData.result.name.includes("Admin")) {
                console.log("ke admin");
                window.location.href = "/dashboard-admin";
              } else {
                if (localStorage.getItem("link")) {
                  window.location.href = localStorage.getItem("link");
                  localStorage.removeItem("link");
                } else {
                  window.location.href = "/dashboard-user";
                }
              }
            })
            .catch((error) => console.error("Error:", error));
        } else {
          setErrMsg("*" + res.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="flex min-h-full justify-between items-center px-6 py-12 lg:px-8 bg-gray-100 h-screen">
        <div className="lg:ml-40 mt-10 hidden md:block md:ml-14">
          <img
            src={orangJahit}
            alt="orang jahit"
            className="w-72 z-20 opacity-80"
          />
          <p className="text-gray-700 font-semibold text-xs text-center">
            100+ PERUSAHAAN BEKERJA SAMA DENGAN KAMI
          </p>
          <div className="flex justify-between mt-12 mx-auto flex-wrap gap-10 w-64 opacity-60">
            <img src={company1} alt="perusahaan 1" className="w-10" />
            <img src={company2} alt="perusahaan 2" className="w-10" />
            <img src={company3} alt="perusahaan 3" className="w-10" />
            <img src={company4} alt="perusahaan 4" className="w-10" />
            <img src={company5} alt="perusahaan 5" className="w-10" />
            <img src={company6} alt="perusahaan 6" className="w-10" />
          </div>
        </div>

        <div className="px-4 pb-5 w-[21rem] md:w-[26rem] mt-8 mx-auto md:mx-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 mb-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login Akun
            </h2>
            <p className="text-sm text-gray-500">
              Masuk akun untuk pesan produk dari Klik Konveksi
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form id="form-login" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <InputForm
                  label="Email"
                  htmlFor="email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <InputForm
                  label="Password"
                  htmlFor="password"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                {errMsg && (
                  <p id="error-msg" className="text-red-600 text-xs mt-1">
                    {errMsg}
                  </p>
                )}
                <a
                  href="/lupa-password"
                  className="text-sm font-semibold text-primer mt-2 hover:text-orange-500 text-right"
                >
                  Lupa Password ?
                </a>
              </div>

              <Button>
                {" "}
                <span
                  className={
                    loading ? "loading loading-spinner text-warning" : "hidden"
                  }
                ></span>{" "}
                <span className={loading ? "hidden" : "block"}>Login</span>
              </Button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Belum Daftar ?
              <a
                href="/register"
                className="font-semibold leading-6 text-primer hover:text-orange-500 ml-1"
              >
                Daftar Sekarang
              </a>
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-3">
            <div className="garis border-[1px] border-gray-400 mt-2 w-20"></div>
            <p className="text-sm text-gray-400 font-medium">
              Atau Login dengan
            </p>
            <div className="garis border-[1px] border-gray-400 mt-2 w-20"></div>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            <button className="flex border-[1.4px] border-gray-300 rounded-md p-2 text-sm justify-center items-center gap-2 w-36 hover:bg-gray-200">
              <div className="w-5">
                <img src={googleLogo} alt="google" className="rounded-full" />
              </div>
              <p className="text-sm font-medium text-gray-600">Google</p>
            </button>

            <button className="flex border-[1.4px] border-gray-300 rounded-md p-2 text-sm justify-center items-center gap-2 w-36 hover:bg-gray-200">
              <div className="w-5">
                <img src={fbLogo} alt="Facebook" className="rounded-full" />
              </div>
              <p className="text-sm font-medium text-gray-600">Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
