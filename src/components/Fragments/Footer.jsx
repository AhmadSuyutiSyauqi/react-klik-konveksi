import waLogo from '../../assets/whatsapp logo.png';
import igLogo from '../../assets/instagram logo.png';
import teleLogo from '../../assets/telegram logo.png';
import tiktokLogo from '../../assets/tiktok logo.png';
import ytLogo from '../../assets/youtube logo.png';

const Footer = () => {
  return (
    <>
      <footer className="mt-14 mb-16 md:mb-0">
        <div className="cons bg-gradient-to-t w-full h-44 p-3 from-[#997127] to-primer">
          <div
            id="logo"
            className="flex justify-evenly w-52 mt-3 ml-5 lg:w-96 lg:mx-auto lg:mt-6"
          >
            <a href="#" className="-ml-8">
              <img
                src={waLogo}
                alt="WhatsApp Logo"
                className="w-5 lg:w-8"
              />
            </a>
            <a href="#" className="-ml-5">
              <img
                src={igLogo}
                alt="Instagram Logo"
                className="w-5 lg:w-8"
              />
            </a>
            <a href="#" className="-ml-5">
              <img
                src={teleLogo}
                alt="Telegram Logo"
                className="w-5 lg:w-8"
              />
            </a>
            <a href="#" className="-ml-5">
              <img
                src={ytLogo}
                alt="Youtube Logo"
                className="w-5 lg:w-8"
              />
            </a>
            <a href="#" className="-ml-5">
              <img
                src={tiktokLogo}
                alt="Tiktok Logo"
                className="w-5 lg:w-8"
              />
            </a>
          </div>

          <div className="text-gray-300 text-sm font-normal mt-4 ml-10 flex flex-col lg:flex-row lg:justify-evenly lg:mt-8">
            <a href="#">
              <p>Contact Us</p>
            </a>
            <a href="#" className="mt-1">
              <p>Our Service</p>
            </a>
            <a href="#" className="mt-1">
              <p>Terms Of Condition</p>
            </a>
          </div>

          <div className="copyright flex justify-center mt-7 text-gray-300 text-xs">
            <p>Copyright © 2024 KlikKonveksi </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
