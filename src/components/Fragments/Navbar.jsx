import Button from "../Elements/Button";

const Navbar = () => {
    return (

        <nav id="nav-menu-desktop flex">
          <div className="navbar bg-none">
            <div className="navbar-center flex justify-around">
              <ul className="menu menu-horizontal px-1 mr-10">
                <li className="mr-3 ">
                  <a href="/home">Beranda</a>
                </li>

                <li className="w-40 -mr-14">
                  <details className="mr-20">
                    <summary className="">Pesan</summary>
                    <ul className="p-2">
                      <li>
                        <a href="home#bahan-kemeja">Bahan Kemeja</a>
                      </li>
                      <li>
                        <a href="home#bahan-jaket">Bahan Jaket</a>
                      </li>
                      <li>
                        <a href="home#bahan-kaos">Bahan Kaos</a>
                      </li>
                      <li>
                        <a href="home#aksesoris">Aksesoris</a>
                      </li>
                      <li>
                        <a href="home#proses-produk">Proses Produksi</a>
                      </li>
                      <li>
                        <a href="home#FAQs-produk">Pertanyaan</a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li className="-mr-14">
                  <details className="mr-16">
                    <summary className="">Tentang Kita</summary>
                    <ul className="p-2">
                      <li>
                        <a href='/about-us'>
                          Fasilitas Produksi
                        </a>
                      </li>
                      <li>
                        <a href="about-us#visi-dan-misi">Visi dan Misi</a>
                      </li>
                      <li>
                        <a href="about-us#sejarah-perusahaan">
                          Sejarah Perusahaan
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li className="w-48 -mr-14">
                  <details className="mr-16">
                    <summary className="">Jenis Kain</summary>
                    <ul className="p-2">
                      <li>
                        <a href="jenis-kain#kemeja-kain">Kemeja</a>
                      </li>
                      <li>
                        <a href="jenis-kain#kaos-kain">Kaos</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>

              <ul className={`profile`}>
                <li className="">
                  <div className="flex gap-3">
                    <div id="keranjang" className={`dropdown dropdown-end ${localStorage.getItem('token') ? 'block' : 'hidden'}`}>
                      <div tabIndex="0" role="button" className="">
                        <div className="indicator mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="orange"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="badge badge-sm indicator-item">8</span>
                        </div>
                      </div>
                      <div
                        tabIndex="0"
                        className="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow"
                      >
                        <div className="card-body">
                          <span className="font-semibold text-md">8 Items</span>
                          <span className="text-orange-300 text-sm">
                            Subtotal: $999
                          </span>
                          <div className="card-actions">
                            <button className="btn btn-warning btn-sm w-32 text-sm">
                              View cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href="/login" className={`${localStorage.getItem('id') ? 'hidden' : 'block'}`}>
                      <Button variant="bg-primer" hover='hover:bg-sekunder'>Login</Button>
                    </a>

                    <div id="profile-picture" className={`dropdown dropdown-end ${localStorage.getItem('id') ? 'block' : 'hidden'}`}>
                      <div
                        tabIndex="0"
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-9 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a
                            className="justify-between"
                            href="dashboard/profile.html"
                          >
                            Profile
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <a className={`logout-btn`} onClick={() => localStorage.clear()} href="/login">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    )}

    export default Navbar;