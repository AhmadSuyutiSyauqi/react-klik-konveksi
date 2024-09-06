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

const FormLupaPw = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Ganti password berhasil dikirim ke email anda !');

        window.location.href = '/login';
    }
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
              Change Password
            </h2>
            <p className="text-sm text-gray-500">
              Masukkan Email untuk ganti password
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form id="form-login" className="space-y-6" onSubmit={handleSubmit}>
              <InputForm
                label="Email"
                htmlFor="email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            <div className="mt-5">
              <Button type="submit">Kirim</Button>
            </div>
            </form>


            <p className="mt-10 text-center text-sm text-gray-500">
              Ingat Password ?
              <a
                href="/login"
                className="font-semibold leading-6 text-primer hover:text-orange-500 ml-1"
              >
                Login Sekarang
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FormLupaPw;
