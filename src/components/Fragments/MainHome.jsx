import img1 from "../../assets/bg-konveksi.jpg";
import img2 from "../../assets/bg-konveksi2.jpg";
import img3 from "../../assets/bg-konveksi3.jpg";
import logoWa from "../../assets/whatsapp logo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// import 'swiper/swiper.min.css'; // Import Swiper styles
// import 'swiper/modules/navigation/navigation.min.css'; // Import Navigation module styles
// import 'swiper/modules/pagination/pagination.min.css';


const Main = () => {
    return (
        <>
      <main id="home" className="">
     
<div className="hero min-h-screen relative">
  {/* <!-- Slider main container --> */}
  <div className="swiper-container absolute inset-0 z-0">
    {/* <!-- Additional required wrapper --> */}
    <div className="swiper-wrapper">
      {/* <!-- Slides --> */}
        
      <div className="swiper-slide bg-cover bg-center" style={{backgroundImage: `url(${img1})`}}></div>
      
      <div className="swiper-slide bg-cover bg-center" style={{backgroundImage: `url(${img2})`}}></div>
      
      <div className="swiper-slide bg-cover bg-center" style={{backgroundImage: `url(${img3})`}}></div>
      
    </div>
  </div>

  <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0 z-10"></div>

  <div className="hero-content text-neutral-content text-center relative z-20">
    <div className="max-w-md">
      <h1 className="mb-3 text-5xl font-bold text-primer">Klik Konveksi</h1>
      <p className="mb-5">
        Platform <span className="text-primer">Konveksi Terbaik se-Indonesia</span>. Menerima pesanan Kemeja PDH, Jaket,
        Kaos, Seragam, Rompi, dll. dengan kualitas terbaik se-Indonesia.
      </p>
      <p className="">
        Buat baju Custom mu
      </p>
      <h2 className="text-primer font-semibold text-3xl mb-5">Sekarang !</h2>
      <div className="flex gap-5 justify-center">
        <a href="https://wa.me/6289668941643?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda">
          <button className="btn btn-outline btn-warning">
            <img src={logoWa} alt="logo wa" className=""/>
            Pesan Sekarang
          </button>
        </a>
        <a href="#kain">
          <button className="btn btn-outline btn-warning">Lihat Produk</button>
        </a>
      </div>
    </div>
  </div>
</div>

</main>
        </>
    );
};

export default Main; 