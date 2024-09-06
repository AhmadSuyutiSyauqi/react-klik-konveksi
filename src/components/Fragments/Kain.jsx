import React from "react";
import { useState } from "react";
import FilterProducts from "../Filter/Filter";
import ProductList from "../ProductList/ProductList";
import nagataDrill from '../../assets/nagata-drill.jpg';
import japanDrill from '../../assets/japan-drill.jpg';
import americanDrill from '../../assets/american.webp';
import kanvas from '../../assets/Kanvas.webp';
import taslan from '../../assets/Taslan.jpg';
import fleece from '../../assets/Fleece.jpg';
import denim from '../../assets/Denim.webp';
import babyTerry from '../../assets/Baby-terry.webp';
import americanJaket from '../../assets/americann-jaket.webp';
import japanJaket from '../../assets/Japan-jaket.jpg';
import nagataJaket from '../../assets/nagata-jaket.jpeg';
import cottonCombed20s from '../../assets/Combed-20s.jpg';
import cottonCombed24s from '../../assets/Combed-24s.jpg';
import cottonCombed30s from '../../assets/Combed-30s.jpg';
import cottonCombedEnzyme from '../../assets/combed-enzyme.jpg';
import lanyard from '../../assets/lanyard.jpeg';
import proses1 from '../../assets/proses 1.jpeg';
import proses2 from '../../assets/proses 2.jpeg';


const productsKemeja = [
  {
    img: nagataDrill,
    name: "Nagata Drill",
    description1: "Katun dan Polyster",
    description2: "210 - 215 gsm",
    description3: "Kemeja PDH, Kemeja PDL",
    price: 95000,
    category: "kemeja",
    bahan: "nagata-drill",
    btnId: "btn-nagata",
    link: "../payment/nagata",
  },
  {
    img: japanDrill,
    name: "Japan Drill",
    description1: "Katun dan Polyster",
    description2: "210 - 215 gsm",
    description3: "Kemeja PDH, Kemeja PDL",
    price: 95000,
    category: "kemeja",
    bahan: "japan-drill",
    btnId: "btn-japan",
    link: "../../payment/japan",
  },
  {
    img: americanDrill,
    name: "American Drill",
    description1: "Katun dan Polyster",
    description2: "208 gsm",
    description3: "Kemeja PDH, Kemeja PDL",
    price: 100000,
    category: "kemeja",
    bahan: "american-drill",
    btnId: "btn-american",
    link: "payment/american",
  },
];

const productsJaket = [
  {
    img: kanvas,
    name: "Kanvas",
    description1: "Katun dan Polyster",
    description2: "480 gsm",
    description3: "Jaket Biasa",
    price: 105000,
    category: "jaket",
    bahan: "kanvas",
    btnId: "btn-kanvas",
    link: "payment/kanvas",
  },
  {
    img: taslan,
    name: "Taslan",
    description1: "Polyster",
    description2: "> 135 gsm",
    description3: "Jaket Boomber",
    price: 100000,
    category: "jaket",
    bahan: "taslan",
    btnId: "btn-taslan",
    link: "payment/taslan",
  },
  {
    img: fleece,
    name: "Fleece",
    description1: "Polyster",
    description2: "240 - 280 gsm",
    description3: "Jaket Varsity, Jaket Hoodie, Jaket Sweater",
    price: 90000,
    category: "jaket",
    bahan: "fleece",
    btnId: "btn-fleece",
    link: "payment/fleece",
  },
  {
    img: denim,
    name: "Denim",
    description1: "Katun",
    description2: "4,54 Oz - 13,75 Oz",
    description3: "Jaket Denim",
    price: 110000,
    category: "jaket",
    bahan: "denim",
    btnId: "btn-denim",
    link: "payment/denim",
  },
  {
    img: babyTerry,
    name: "Baby Terry",
    description1: "Polyster",
    description2: "260 - 280",
    description3: "Jaket Hoodie, Jaket Sweater, Jaket Varsity",
    price: 120000,
    category: "jaket",
    bahan: "baby-terry",
    btnId: "btn-baby-terry",
    link: "payment/baby-terry",
  },
  {
    img: americanJaket,
    name: "American Drill",
    description1: "Polyster dan Viscoce",
    description2: "208 gsm",
    description3: "Jaket Casual",
    price: 100000,
    category: "jaket",
    bahan: "american-drill",
    btnId: "btn-american-jaket",
    link: "payment/american-jaket",
  },
  {
    img: japanJaket,
    name: "Japan Drill",
    description1: "Katun dan Polyster",
    description2: "210 - 215 gsm",
    description3: "Jaket Boomber",
    price: 110000,
    category: "jaket",
    bahan: "japan-drill",
    btnId: "btn-japan-jaket",
    link: "payment/japan-jaket",
  },
  {
    img: nagataJaket,
    name: "Nagata Drill",
    description1: "Polyster",
    description2: "Diatas 135 gsm",
    description3: "Jaket Hoodie",
    price: 100000,
    category: "jaket",
    bahan: "nagata-drill",
    btnId: "btn-nagata-jaket",
    link: "payment/nagata-jaket",
  },
];

const productsKaos = [
  {
    img: cottonCombed20s,
    name: "Cotton Combed 20s",
    description1: "Katun",
    description2: "180 - 220 gsm",
    description3: "Kaos Custom",
    price: 90000,
    category: "kaos",
    bahan: "combed20s",
    btnId: "btn-combed-20s",
    link: "payment/payment-combed20s.html",
  },
  {
    img: cottonCombed24s,
    name: "Cotton Combed 24s",
    description1: "Katun",
    description2: "170 - 210 gsm",
    description3: "Kaos Custom",
    price: 85000,
    category: "kaos",
    bahan: "combed24s",
    btnId: "btn-combed-24s",
    link: "payment/pamyment-combed24s.html",
  },
  {
    img: cottonCombed30s,
    name: "Cotton Combed 30s",
    description1: "Katun",
    description2: "180 - 210 gsm",
    description3: "Kaos Custom",
    price: 75000,
    category: "kaos",
    bahan: "combed30s",
    btnId: "btn-combed-30s",
    link: "payment/payment-combed30s.html",
  },
  {
    img: cottonCombedEnzyme,
    name: "Cotton Combed Enzyme",
    description1: "Katun",
    description2: "180 - 210 gsm",
    description3: "Kaos Custom",
    price: 90000,
    category: "kaos",
    bahan: "combed-enzyme",
    btnId: "btn-combed-enzyme",
    link: "payment/payment-combed-enzyme.html",
  },
];

const productsAksesoris = [
  {
    img: lanyard,
    name: "Lanyard + ID Card",
    description1:
      "Lanyard berkualitas tinggi dengan desain elegan, sempurna untuk menjaga ID card dan kunci Anda tetap aman dan mudah dijangkau.",
    price: 90000,
    category: "aksesoris",
    bahan: "lanyard",
    btnId: "beli-sekarang-btn",
  },
];

// const searchInput = document.querySelector("#search-input");
// const productListKemeja = document.querySelector("#product-list-kemeja");
// const productListJaket = document.querySelector("#product-list-jaket");
// const productListKaos = document.querySelector("#product-list-kaos");
// const productListAksesoris = document.querySelector("#product-list-aksesoris");

// const categorySelect = document.querySelector("#category-select");
// const bahanSelect = document.querySelector("#bahan-select");

// console.log("ada");

// const productBox =
//   "card card-compact w-48 md:w-60 bg-base-100 shadow-xl mt-10 align-baseline transition hover:scale-105 ease-in-out duration-300 flex-shrink-0";

// const noneSearchKemeja = document.querySelector("#none-search-kemeja");
// const noneSearchJaket = document.querySelector("#none-search-jaket");
// const noneSearchKaos = document.querySelector("#none-search-kaos");
// const noneSearchAksesoris = document.querySelector("#none-search-aksesoris");

// const kemejaAllContents = document.querySelector("#kemeja");
// const jaketAllContents = document.querySelector("#jaket");
// const kaosAllContents = document.querySelector("#kaos");
// const aksesorisAllContents = document.querySelector("#aksesoris");

// displayProducts(productsKemeja, productsJaket, productsKaos, productsAksesoris);

// searchInput.addEventListener("input", filterProducts);
// categorySelect.addEventListener("change", filterProducts);
// bahanSelect.addEventListener("change", filterProducts);

const Kain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBahan, setSelectedBahan] = useState("all");

  return (
    <>
      <section id="kain" className="mt-20 lg:mt-20 p-3">
        <div className="flex justify-center mb-10">
          <h1 className="text-gray-700 font-semibold text-xl">Bahan Kain</h1>
        </div>

        <div className="flex justify-between mb-5 items-center">
          <div className="flex flex-wrap gap-3">
            <FilterProducts
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBahan={selectedBahan}
            setSelectedBahan={setSelectedBahan}
            />
          </div>
        </div>

        <ProductList
          productsKemeja={productsKemeja}
          productsJaket={productsJaket}
          productsKaos={productsKaos}
          productsAksesoris={productsAksesoris}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedBahan={selectedBahan}
        />

        <div className="garis w-full border-[1px] border-gray-400 rounded-lg mt-16 lg:mt-32"></div>

        <div id="proses-produk" className="proses-produksi flex justify-center">
          <h1 className="text-gray-500 font-semibold text-lg mt-10">
            Proses Produksi
          </h1>
        </div>

        <div id="proses 1" className="mt-10 flex lg:px-32">
          <p className="text-base font-medium text-primer mr-3 lg:mr-8 lg:font-bold lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit, amet consectetur adipisicing.
            <span className="text-gray-600 font-normal text-sm">
              {" "}
              Labore necessitatibus pariatur nobis omnis velit dolorum debitis
              odit ratione adipisci suscipit.{" "}
              <span className="hidden lg:flex">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque dignissimos asperiores architecto nisi corporis? Et,
                laboriosam id soluta eaque a adipisci iste perferendis explicabo
                cum corporis nesciunt saepe vitae blanditiis.
              </span>
            </span>
          </p>

          <img
            src={proses1}
            alt="proses produksi 1"
            className="h-96 object-cover rounded-lg lg:w-72 lg:mr-20"
          />
        </div>

        <div
          id="proses 2"
          className="mt-10 flex flex-row-reverse lg:px-32 lg:mt-20"
        >
          <p className="text-base font-medium text-primer ml-3 lg:ml-8 lg:font-bold lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
            ipsum dolor.
            <span className="text-gray-600 font-normal text-sm">
              {" "}
              Labore necessitatibus pariatur nobis omnis velit dolorum debitis
              odit ratione adipisci suscipit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.{" "}
              <span className="hidden lg:block">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore animi iure aut ea mollitia odio natus amet magnam nam.
                Minima eaque magni possimus dicta, molestiae consequatur
                expedita quis quae a?{" "}
              </span>
            </span>
          </p>

          <img
            src={proses2}
            alt="proses produksi 2"
            className="h-96 object-cover rounded-lg lg:w-72"
          />
        </div>

        <div id="FAQs-produk" className="flex justify-center mt-28">
          <h1 className="font-semibold text-xl text-gray-600">FAQs</h1>
        </div>

        <div className="join join-vertical w-full mt-10 flex flex-col justify-center items-center">
          <div
            id="box-1"
            className="collapse collapse-arrow join-item border-base-300 shadow-md mb-3 lg:w-[50rem]"
          >
            <input type="radio" name="my-accordion-4" id="radio-1" readOnly />
            <div className="collapse-title flex items-center">
              <p className="text-sm font-medium text-gray-500 mt-2">
                Apakah pesanan bisa berbeda dengan ketentuan yang ada ?
              </p>
            </div>

            <div className="collapse-content">
              <p className="text-sm font-normal text-gray-500 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                iusto, sunt at cumque aperiam nihil.
              </p>
            </div>
          </div>

          <div
            id="box-2"
            className="collapse collapse-arrow join-item shadow-md mb-3 lg:w-[50rem]"
          >
            <input type="radio" name="my-accordion-4" id="radio-2" />
            <div className="collapse-title flex items-center">
              <p className="text-sm font-medium text-gray-500 mt-2">
                Perusahaan berlokasi dimana?
              </p>
            </div>
            <div className="collapse-content">
              <p className="text-sm font-normal text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>

          <div
            id="box-3"
            className="collapse collapse-arrow join-item shadow-md lg:w-[50rem]"
          >
            <input type="radio" name="my-accordion-4" id="radio-3" />
            <div className="collapse-title text-xl font-normal">
              <p className="text-sm font-medium text-gray-500 mt-2">
                Apakah kita bisa memesan kemeja/kaos dengan kain yang kita
                tentukan ?
              </p>
            </div>
            <div className="collapse-content">
              <p className="text-sm font-normal text-gray-600 mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                molestias aut sunt dicta totam harum aperiam nobis aspernatur
                eaque voluptatem, aliquid mollitia dignissimos inventore dolores
                recusandae minus corporis iusto esse?
              </p>
            </div>
          </div>

          <div
            id="box-4"
            className="collapse collapse-arrow join-item shadow-md lg:w-[50rem]"
          >
            <input type="radio" name="my-accordion-4" id="radio-4" />
            <div className="collapse-title text-xl font-normal">
              <p className="text-sm font-medium text-gray-500 mt-2">
                Bagaimana cara memesan ?
              </p>
            </div>
            <div className="collapse-content">
              <p className="text-sm font-normal text-gray-600 mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                molestias aut sunt dicta totam harum aperiam nobis aspernatur
                eaque voluptatem, aliquid mollitia dignissimos inventore dolores
                recusandae minus corporis iusto esse?
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </section>
    </>
  );
};

export default Kain;
