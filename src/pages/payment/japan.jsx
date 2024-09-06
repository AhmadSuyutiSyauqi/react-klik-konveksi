import Header from "../../components/Fragments/Header";
import japanDrill from "../../assets/japan-drill.jpg";
import ProductImage1 from "../../assets/pdh.jpeg";
import ProductImage2 from "../../assets/pdl.jpg";
import { useState } from "react";
import UploadImage from "../../components/Fragments/UploadImg";

const PaymentJapanPage = () => {
  return (
    <>
      <Header />
      <div id="payment-baby-terry" className="pt-14 lg:flex">
        
        <UploadImage />

        <div className="w-full">
          <div className="kain mt-6 flex p-2 bg-gray-300 ml-2">
            <div className="w-20 rounded-md lg:w-32">
              <img src={japanDrill} alt="Japan Drill" />
            </div>

            <div className="ml-2">
              <p className="font-semibold text-xl lg:text-2xl">
                Bahan Japan Drill
              </p>
              <p className="text-gray-600 text-[0.6rem] font-medium mt-1 lg:text-xs">
                <span className="text-black">Kandungan Bahan :</span>
                Polyster
              </p>
              <p className="text-gray-600 text-[0.6rem] font-medium lg:text-xs">
                <span className="text-black">Gramasi :</span> 260 - 280 gsm
              </p>
              <p className="text-gray-600 text-[0.6rem] font-medium lg:text-xs">
                <span className="text-black">Rekomendasi (*) :</span> Jaket
                Hoodie, Jaket Sweater, Jaket Varsity
              </p>
            </div>
          </div>

          <div id="pilihan" className="flex flex-col">
            <div className="pilih-produk flex justify-around flex-wrap lg:justify-normal lg:gap-10 lg:ml-3">
              <button
                onClick={() => "border-2 border-orange-500"}
                className="relative w-20 lg:w-40 mx-2 mt-3  hover:opacity-70 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:border-2 focus:border-primer"
              >
                <img
                  src={ProductImage1}
                  alt="hoodie"
                  className="object-cover"
                />
                <div className="absolute w-[4.9rem] h-10 bg-gradient-to-t from-gray-900 from-10% bottom-0 text-[0.6rem] font-normal text-white flex justify-center items-center lg:w-full">
                  <p className="mt-4">*Kemeja Pdh</p>
                </div>
              </button>

              <button
                onClick={() => "toggleActive(this)"}
                className="relative w-20 lg:w-40 mx-2 mt-3  hover:opacity-70 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:border-2 focus:border-primer"
              >
                <img
                  src={ProductImage2}
                  alt="varsity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-[4.9rem] h-10 bg-gradient-to-t from-gray-900 from-10% bottom-0 text-[0.6rem] font-normal text-white flex justify-center items-center lg:w-full">
                  <p className="mt-4">*Kemeja Pdl</p>
                </div>
              </button>
            </div>

            <div className="mt-4 ml-3 p-2 pr-3">
              <p className="text-xs font-medium text-gray-600 mt-3 mb-1">
                Jumlah pesanan
              </p>
              <div className="flex gap-3">
                <input
                  id="option1"
                  type="number"
                  name="options2"
                  placeholder="Jumlah"
                  className="text-sm font-normal border px-2 py-1 w-36 focus:outline-primer rounded-md"
                />
                <label
                  htmlFor="options2"
                  className="font-semibold text-gray-600 mt-[1px] py-1 -ml-2 text-xs"
                >
                  pcs
                </label>
              </div>

              <p className="text-xs font-medium text-gray-600 mt-3 mb-1">
                Catatan
              </p>
              <textarea
                className="textarea textarea-warning textarea-md w-full"
                placeholder="Tambahkan catatan"
              ></textarea>

              <div className="flex mt-5 flex-row-reverse">
                <a href="../payment.html">
                  <button className="btn btn-warning btn-sm">
                    Selanjutnya
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default PaymentJapanPage;
