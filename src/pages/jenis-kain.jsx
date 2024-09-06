import Footer from "../components/Fragments/Footer";
import Header from "../components/Fragments/Header";
import nagataDrill from "../assets/nagata-drill.jpg";
import americanDrill from "../assets/american.webp";
import japanDrill from "../assets/japan-drill.jpg";
import combed20s from "../assets/Combed-20s.jpg";
import combed24s from "../assets/Combed-24s.jpg";
import combed30s from "../assets/Combed-30s.jpg";
import combedEnzyme from "../assets/combed-enzyme.jpg";
import { useNavigate } from 'react-router-dom';

const dataKemeja = [
  {
    id: 1,
    name: "NAGATA DRILL",
    image: nagataDrill,
    description: (
      <>
        Bahan <span className="text-primer">Nagata Drill</span> merupakan bahan
        kain yang berasal dari kain Japan Drill. Yaitu jenis bahan yang kualitas
        tinggi dan memiliki ukuran relatif stabil dengan lipatan serta
        penyusutan. Bahan Nagata Drill ini sangat sering digunakan dalam
        pembuatan kemeja, seragam, jaket, dll. Tapi kebanyakan bahan ini paling
        sering digunakan untuk membuat kemeja seragam.
      </>
    ),
  },
  {
    id: 2,
    name: "JAPAN DRILL",
    image: japanDrill,
    description: (
      <>
        <span className="text-primer">Japan drill</span> memakai kombinasi katun
        dan polyester yang kemudian dirajut secara diagonal atau miring. Berbeda
        dengan jenis lain, high quality Japan drill menggunakan komposisi katun
        yang lebih tinggi dibandingkan dengan polyester. Itu sebabnya, kain
        tampak lebih tebal.
      </>
    ),
  },
  {
    id: 3,
    name: "AMERICAN DRILL",
    image: americanDrill,
    description: (
      <>
        Bahan <span className="text-primer">American Drill ini</span> sering
        dibuat untuk berbagai kebutuhan seragam seperti kemeja, celana, jaket,
        rompi bahkan jas almamater. Dengan memiliki tekstur miring atau
        diagonal, serta jalinan benang yang kuat, kain ini memiliki kualitas
        yang tinggi dan relatif stabil pada setiap lipatan dan penyusutan
      </>
    ),
  },
];

const dataKaos = [
  {
    id: 1,
    name: "COTTON COMBED 20S",
    image: combed20s,
    description: `Cotton combed merupakan jenis bahan kain yang menjadi favorit banyak
        kalangan dan banyak beredar di pasaran. Kain cotton combed dinilai
        bersifat human friendly lantaran teksturnya yang lembut dan halus di
        kulit. Selain itu, cotton combed asli yang mengandung 100% cotton atau
        kapas tentu sangat cocok untuk kamu yang memiliki kulit sensitif.`,
  },
  {
    id: 2,
    name: "COTTON COMBED 24S",
    image: combed24s,
    description: (
      <>
        Dari segi ketebalan, bahan katun
        <span className="text-primer"> Combed 24s</span> berada di antara kedua
        bahan lainnya, yaitu sekitar 170-210 gr/m2. Artinya, bahan ini sedikit
        lebih tipis daripada katun combed 20s, namun tetap terasa nyaman dan
        sejuk, terutama untuk dipakai di daerah bercuaca panas.
      </>
    ),
  },
  {
    id: 3,
    name: "COTTON COMBED ENZYME",
    image: combedEnzyme,
    description: (
      <>
        Cotton <span className="text-primer">Combed Enzyme</span> atau sering
        disebut biowash merupakan bahan Cotton Combed yang mempunyai komposisi
        100% katun premium. Perbedaan antara Cotton combed biasa dengan Cotton
        Combed Enzyme adalah adanya proses pencucian enzyme wash yang
        menggunakan protein alami (enzim).
      </>
    ),
  },
  {
    id: 4,
    name: "COTTON COMBED 30S",
    image: combed30s,
    description: (
      <>
        Jenis katun combed yang terakhir ini adalah yang paling tipis sebab
        ketebalannya hanya sekitar 140-160gr/m2. Namun bahan katun
        <span className="text-primer">Combed 30s</span> merupakan jenis katun
        yang paling banyak digunakan oleh vendor kaos dan digandrungi oleh
        customer.
      </>
    ),
  },
];

const JenisKain = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section id="jenis-kain">
        <div className="cons p-3">
          <div className="flex justify-center text-sm font-medium text-primer mt-20">
            <h4>Macam - macam bahan Kain</h4>
          </div>

          <div
            id="kemeja-kain"
            className="flex justify-center text-base font-medium text-gray-600 mt-14 lg:text-xl lg:font-semibold"
          >
            <h4>Kemeja</h4>
          </div>

          <div className="garis w-full border-[1px] border-primer rounded-lg mt-3"></div>

          <div className="cons-kemeja px-10 flex flex-wrap justify-around">
            {dataKemeja.map((product) => (
              <div
                key={product.id}
                className={`${product.name} mt-8 flex flex-col lg:w-72`}
              >
                <div className="lg:flex lg:flex-col-reverse">
                  <h1 className="text-primer font-semibold text-xl mb-3 lg:mx-auto lg:mt-2">
                    {product.name}
                  </h1>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl"
                  />
                </div>

                <p className="text-gray-500 text-sm font-normal mt-4 lg:mt-2 h-52">
                  {product.description}
                </p>
                <button
                  onClick={() => {
                    localStorage.setItem("name", product.name);
                    navigate('/penjelasan-kain');
                  }}
                  className="btn btn-outline btn-warning btn-sm w-32 ml-auto max-w-32 min-w-20 outline-primer btn-square text-sm font-normal mt-4ml-auto hover:text-white"
                >
                  Selengkapnya
                </button>
              </div>
            ))}
          </div>

          <div
            id="kaos-kain"
            className="flex justify-center text-base font-medium text-gray-600 mt-14 lg:text-xl lg:font-semibold"
          >
            <h4>Kaos</h4>
          </div>

          <div className="garis w-full border-[1px] border-primer rounded-lg mt-3"></div>

          <div className="cons-kaos px-10 flex flex-wrap justify-around">
            {dataKaos.map((dataKaos) => (
              <div
                key={dataKaos.id}
                className="combed-20s mt-8 flex flex-col lg:w-72 lg:mr-3"
              >
                <div className="lg:flex lg:flex-col-reverse">
                  <h1 className="text-primer font-semibold text-xl mb-3 lg:mx-auto lg:mt-2">
                    {dataKaos.name}
                  </h1>
                  <img
                    src={dataKaos.image}
                    alt="Combed 20s"
                    className="rounded-xl"
                  />
                </div>

                <p className="text-gray-500 text-sm font-normal mt-4 lg:mt-2 h-52">
                  {dataKaos.description}
                </p>
                <button
                  onClick={() => {
                    localStorage.setItem("name", dataKaos.name);
                    navigate('/penjelasan-kain');
                  }}
                  className="btn btn-outline btn-warning btn-sm w-32 ml-auto max-w-32 min-w-20 outline-primer btn-square text-sm font-normal mt-4ml-auto hover:text-white"
                >
                  Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JenisKain;
