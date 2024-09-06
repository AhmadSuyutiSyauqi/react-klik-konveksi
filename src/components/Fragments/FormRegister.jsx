import company1 from "../../assets/company 1.png";
import company2 from "../../assets/company 2.png";
import company3 from "../../assets/company 3.png";
import company4 from "../../assets/company 4.png";
import company5 from "../../assets/company 5.png";
import company6 from "../../assets/company 6.png";
import orangJahit from "../../assets/orang jahit.png";
import React, { useState } from "react";
import InputForm from "../../components/Elements/Input/index";
import Button from "../../components/Elements/Button";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [samePw, setSamePw] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
        setSamePw(true);
    } else {
      setLoading(true);

      const data = {
        name: name,
        email,
        password,
        phone_number: noHp,
      };

      console.log(noHp);
      console.log(password);
      console.log(confirmPassword);

      fetch("https://apiv2.alhifnywahid.xyz/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);

          if (res.status && password === confirmPassword) {
            alert("Berhasil Daftar !");
            window.location.href = "http://localhost:5173/login";
          } else {
            alert("Gagal mendaftar !");
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <div className="flex min-h-full justify-between items-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="lg:ml-40 -mt-8 hidden md:block md:ml-14">
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

        <div className="px-4 pb-5 w-[21rem] md:w-[26rem] mx-auto md:mx-0 mt-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 mb-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Form Pendaftaran
            </h2>
            <p className="text-sm text-gray-500">
              Silahkan daftar akun terlebih dahulu
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form id="form-login" className="space-y-6" onSubmit={handleSubmit}>
              <InputForm
                label="Nama Lengkap"
                htmlFor="name"
                name="name"
                id="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <InputForm
                label="Email"
                htmlFor="email"
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <InputForm
                label="Alamat tempat tinggal"
                htmlFor="alamat"
                name="alamat"
                id="alamat"
                type="alamat"
                autoComplete="alamat"
              />

              <InputForm
                label="Nomor Handphone"
                htmlFor="no-hp"
                name="no-hp"
                id="no-hp"
                type="text"
                autoComplete="no-hp"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
               
              />

              <InputForm
                label="Password"
                htmlFor="password"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <InputForm
                label="Konfirmasi Password"
                htmlFor="confirm-password"
                name="confirm-password"
                id="confirm=password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {samePw && (
                <p className="text-red-600 text-xs">*Password tidak sama</p>
              )}

              {/* <p
                  className={`${
                    password !== confirmPassword && confirmPassword != null
                      ? "text-red-600 text-xs block"
                      : "hidden"
                  } `}
                >
                  *Password tidak sama
                </p> */}

              <div>
                <Button type="submit" disabled={loading}>
                  <span
                    id="loading"
                    className={`loading loading-spinner text-warning ${
                      loading ? "block" : "hidden"
                    }`}
                  ></span>
                  <span
                    id="text-login"
                    className={`${loading ? "hidden" : "block"}`}
                  >
                    Daftar
                  </span>
                </Button>
              </div>

              {/* <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-md bg-primer px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primer"
                >
                  <span
                    id="loading"
                    className={`loading loading-spinner text-warning ${
                      loading ? "block" : "hidden"
                    }`}
                  ></span>
                  <span
                    id="text-login"
                    className={`${loading ? "hidden" : "block"}`}
                  >
                    Login
                  </span>
                </button>
              </div> */}
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Sudah punya akun ?
              <a
                href="/login"
                className="font-semibold leading-6 text-primer hover:text-orange-500 ml-1"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
