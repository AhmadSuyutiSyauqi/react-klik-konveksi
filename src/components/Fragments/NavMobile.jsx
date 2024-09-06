const NavMobile = () => {
  return (
    <>
      <div id="btm-nav" className="btm-nav z-[9999] lg:hidden h-14">
        <a id="a-home" href="index.html#home" className="a-home">
          <button id="btn-home" className="btn-home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
          <p id="text-beranda" className="text-beranda text-xs">
            Beranda
          </p>
        </a>

        <a id="a-product" href="index.html#kain" className="a-product">
          <button
            id="btn-product-nav"
            className="btn-product-nav flex flex-col items-center gap-1"
          >
            <div className="h-5 w-5 object-cover">
              <img
                id="icon-product-gray"
                src="img/tshirt.png"
                alt="produt icons"
                className="icon-product-gray"
              />
              <img
                id="icon-product-orange"
                src="img/product icon focus.png"
                alt=""
                className="icon-product-orange hidden"
              />
            </div>
            <p id="text-product" className="text-product text-xs">
              Produk
            </p>
          </button>
        </a>

        <a href="about-us.html" id="a-tentang" className="a-tentang">
          <button id="btn-about-us" className="icon-tentang">
            <svg
              className="people"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            //   className="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </button>
          <p id="text-tentang" className="text-tentang text-xs">
            Tentang Kita
          </p>
        </a>

        <a href="jenis-kain.html#jenis-kain" id="a-info" className="a-info">
          <button id="btn-informasi" className="icon-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p id="text-informasi" className="text-informasi text-xs">
            Informasi Kain
          </p>
        </a>
      </div>
    </>
  );
};

export default NavMobile;
