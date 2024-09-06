import Footer from "../components/Fragments/Footer";
import Header from "../components/Fragments/Header";
import proses1 from "../../src/assets/proses 3.png";
import proses2 from "../../src/assets/proses 2.png";
import visiMisiImg from "../assets/visi misi.webp"


const AboutUs = () => {

    return(
        <>

    <Header/>

    <section id="about-us" className="">

    <div id="fasilitas-produksi" className="cons md:p-10 p-4">

      <p className="text-xs text-gray-800 lg:text-sm lg:font-medium mb-10 mt-20">Fasilitas Produksi</p>


      <h4 className="mt-2 text-gray-800 font-medium">Sebagai perusahaan konveksi terbesar se-Indonesia, kami memiliki
        tukang
        jahit terbaik dengan fasilitas terbaik untuk pelanggan kami. Fasilitas tersebut diantaranya: Mesin Bordir,
        Mesin
        Jahit, gudang bahan baku,pabrik produksi, ruangan desain dan pengembangan, kain yang berkualitas, dan tentunya
        pekerja profesional terpilih, semua itu kami hadirkan untuk kalian.</h4>

      <div id="imgProduksi" className="w-full flex flex-wrap justify-center">

        <div className="mb-4 mt-5 lg:mr-5 w-60 lg:w-96">
          <img src={proses1} alt="img proses 1" className=""/>
        </div>

        <div className="mb-4 lg:mt-5 lg:mr-5 w-60 lg:w-96">
          <img src={proses2} alt="img proses 1" className="rounded-lg"/>
        </div>


      </div>
    </div>

    <div className="garis w-full border-[1px] border-gray-400 rounded-lg mt-8"></div>

    <div id="visi-dan-misi" className="cons mt-10">

      <div className="p-4 lg:p-0">

        <div id="img-visi" className="w-full">
          <img className="rounded-lg lg:rounded-none h-32 md:w-full md:h-[28rem] object-cover" src={visiMisiImg}
            alt="img visi misi"/>
        </div>

        <h1 className="text-2xl font-semibold mt-6 text-gray-500 md:-mt-28 md:text-[4rem] md:ml-10 md:text-[#fdfff9]">Visi
          dan
          Misi</h1>

      </div>

      <div className="cons mt-10 p-4 md:mt-20 md:flex md:ml-10">

        <div className="md:-ml-3">

          <p className="text-gray-600 font-semibold md:mt-7">Visi</p>
          <p className="text-gray-600 text-xs font-medium mt-2">Menjadi perusahaan konveksi terkemuka yang dikenal atas
            kualitas, inovasi, dan keunggulan layanan di industri fashion, dengan fokus pada keberlanjutan dan tanggung
            jawab sosial.</p>

        </div>

        <div className="">
          <div
            className="w-full border-[1px] border-gray-600 rounded-lg mt-6 lg:w-[0.10rem] lg:h-full lg:border-0 lg:bg-gray-600">
          </div>
        </div>

        <div className="md:ml-10">
          <p className="text-gray-600 font-semibold mt-7">Misi</p>
          <p className="text-gray-600 text-xs font-medium mt-2">
            1. Memberikan produk-produk konveksi berkualitas tinggi yang memenuhi standar internasional dan kepuasan
            pelanggan.</p>
          <p className="text-gray-600 text-xs font-medium mt-2">2. Mengintegrasikan inovasi dan teknologi terkini dalam
            proses
            produksi untuk meningkatkan efisiensi dan kualitas.</p>
          <p className="text-gray-600 text-xs font-medium mt-2">3. Membangun hubungan yang berkelanjutan dengan pelanggan,
            mitra, dan pemasok berdasarkan kepercayaan dan kemitraan yang saling menguntungkan.</p>
          <p className="text-gray-600 text-xs font-medium mt-2">4. Mendukung pembangunan masyarakat lokal dan lingkungan
            dengan melakukan praktik bisnis yang bertanggung jawab secara sosial dan lingkungan.</p>
        </div>
      </div>

    </div>

    <div id="sejarah-perusahaan" className="cons mt-20 p-4 flex flex-col items-center">

      <div className="lg:w-[40rem]">

        <h1 className="font-medium text-3xl text-center text-gray-700 mb-20 lg:text-[2.8rem]/[5rem] font-alata">Itu semua
          bermula dari sebuah tempat
          kecil.
        </h1>

      </div>

      <div className="join join-vertical w-full flex flex-col items-center">
        <div id="box-1" className="collapse collapse-arrow join-item border-base-300 shadow-md mb-3 lg:w-[50rem] lg:mb-8">
          <input type="radio" name="my-accordion-4" id="radio-1" checked />
          <div className="collapse-title flex items-center">
            <p className="text-sm font-semibold text-gray-600 mt-2">2021</p>
          </div>

          <div className="collapse-content">
            <p className="text-sm font-medium text-gray-600 mt-2">Pada tahun 2021 Klik Konveksi didirikan oleh seorang
              mahasiswa yang bernama Suyuti, yang memiliki pengalaman yang
              cukup di bidang konveksi.</p>
          </div>
        </div>

        <div id="box-2" className="collapse collapse-arrow join-item shadow-md mb-3 lg:w-[50rem] lg:mb-8">
          <input type="radio" name="my-accordion-4" id="radio-2" />
          <div className="collapse-title flex items-center">
            <p className="text-sm font-semibold text-gray-600 mt-2">2022</p>
          </div>
          <div className="collapse-content">
            <p className="text-sm font-medium text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat aute irure dolor in reprehenderit in
              voluptate aute irure dolor reprehenderit
              <img src="img/gambar3.webp" alt="" className="max-w-24 float-left mr-2"/>
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>

          </div>
        </div>

        <div id="box-3" className="collapse collapse-arrow join-item shadow-md lg:w-[50rem]">
          <input type="radio" name="my-accordion-4" id="radio-3" />
          <div className="collapse-title text-xl font-medium">
            <p className="text-sm font-semibold text-gray-600 mt-2">2023 - now</p>
          </div>
          <div className="collapse-content">
            <p className="text-sm font-medium text-gray-600 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Natus molestias aut sunt dicta totam harum aperiam nobis aspernatur eaque voluptatem, aliquid mollitia
              dignissimos inventore dolores recusandae minus corporis iusto esse?</p>
          </div>
        </div>
      </div>
    </div>


  </section>

  <Footer/>
  </>

    )

}

export default AboutUs;