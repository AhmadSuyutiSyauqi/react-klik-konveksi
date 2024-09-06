import company1 from "../assets/company 1.png";
import company2 from "../assets/company 2.png";
import company3 from "../assets/company 3.png";
import company4 from "../assets/company 4.png";
import company5 from "../assets/company 5.png";
import company6 from "../assets/company 6.png";
import orangJahit from "../assets/orang jahit.png";
import googleLogo from "../assets/google.png";
import fbLogo from "../assets/fb.webp";
import Header from "../components/Fragments/Header";
import React, { useState } from "react";
import Footer from "../components/Fragments/Footer";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <>
<div className="bg-gray-100">

      <Header variant="bg-gray-400"></Header>

    <FormLogin/>

      <Footer />
</div>
    </>
  );
};

export default LoginPage;
