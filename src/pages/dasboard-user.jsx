import { useState } from "react";
import Header from "../components/Fragments/Header";

const DashboardUser = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <header
        id="main-header"
        className="flex bg-sekunder items-center justify-between p-2 z-50 fixed w-full shadow-md h-16"
      >
        <div className="flex items-center w-full h-10 lg:w-52 p-2">
          <button
            id="toggle-sidebar"
            className="text-indigo-600 px-3 py-2 rounded-full hover:bg-orange-500"
            onClick={() => handleToggle()}
          >
            <svg
              className="swap-off fill-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
          <h1 className="font-bold text-3xl text-gray-200 ml-2">Dashboard</h1>
        </div>

        {/* <!-- Profile dan Keranjang --> */}
        <nav id="nav-menu-desktop" className="flex">
          <div className="navbar bg-none">
            <div className="navbar-center lg:flex justify-around">
              {/* <!-- Profile + Keranjang --> */}
              <ul className="profile">
                <li className="">
                  <div className="flex gap-3">
                    {/* <!-- Keranjang Logo --> */}
                    <div className="dropdown dropdown-end">
                      <div tabIndex="0" role="button" className="">
                        <div className="indicator mt-4">
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

                    {/* <!--Profile Picture --> */}
                    <div className="dropdown dropdown-end">
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
                          <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="logout-btn"
                            onClick={() => localStorage.clear()}
                            href="/login"
                          >
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
      </header>

      <div id="profile" className="min-h-screen flex flex-col pt-14">
        <div className="flex flex-1">
          {/* <!-- Sidebar --> */}
          <aside
            id="sidebar"
            className={`bg-white w-64 shadow-lg transform transition-transform translate-x-0 ${isCollapsed? 'collapsed' : ''}`}
          >
            <div className="px-6 py-4">
              <h2 id="text-menu" className={`text-2xl font-semibold mb-4 ${isCollapsed? '-ml-2' : ''} `}>
                Menu
              </h2>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/home"
                      className="hover:text-white hover:bg-primer block py-2 px-4 rounded-md"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="profile.html"
                      className="text-primer block py-2 px-4 rounded-md"
                    >
                      Profil
                    </a>
                  </li>
                  <li>
                    <a
                      href="pesan.html"
                      className="text-gray-700 block py-2 px-4 rounded-md hover:text-white hover:bg-primer"
                    >
                      Pesan Produk
                    </a>
                  </li>
                  <li>
                    <a
                      href="pesanan-saya.html"
                      className="text-gray-700 block py-2 px-4 rounded-md hover:text-white hover:bg-primer"
                    >
                      Pesanan
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* <!-- Main Content --> */}
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Profil Saya</h2>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-shrink-0">
                  <button className="rounded-full">
                    <img
                      className="h-20 w-20 rounded-full object-cover"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="Profile Photo"
                    />
                  </button>
                </div>

                <div className="flex-1 ml-5">
                  <div className="mb-4">
                    <p className="block text-sm font-medium text-gray-700">Nama</p>
                    <p id="name" type="text" className="mt-1">
                      Ahmad Suyuti Syauqi
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="block text-sm font-medium text-gray-700">Email</p>
                    <p id="email" type="text" className="mt-1">
                      ahmadsuyutisyauqi@gmail.com
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="block text-sm font-medium text-gray-700">
                      Nomor Hp
                    </p>
                    <p id="phone" type="text" className="mt-1">
                      089534546533
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="block text-sm font-medium text-gray-700">
                      Alamat
                    </p>
                    <p id="address" type="text" className="mt-1"></p>
                  </div>

                  <div className="flex flex-row-reverse">
                    <button
                      id="edit-btn"
                      className="btn btn-sm mt-5 ml-auto btn-warning"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* <!-- EDIT PROFILE -->
  <div id="edit-profile" className="min-h-screen flex flex-col pt-14 hidden">
    <div className="flex flex-1">

      <!-- Sidebar -->
      <aside id="sidebar" className="bg-white w-72 shadow-lg transform transition-transform  translate-x-0">
        <div className="px-6 py-4">
          <h2 id="text-menu" className="text-2xl font-semibold mb-4">Menu</h2>
          <nav>
            <ul className="space-y-4">
              <li><a href="../index.html" className="hover:text-white hover:bg-primer block py-2 px-4 rounded-md">Home</a>
              </li>
              <li><a href="profile.html" className="text-primer block py-2 px-4 rounded-md">Profile</a></li>
              <li><a href="pesan.html"
                  className="text-gray-700 block py-2 px-4 rounded-md hover:text-white hover:bg-primer">Pesan Produk</a>
              </li>
              <li><a href="pesanan-saya.html"
                  className="text-gray-700 block py-2 px-4 rounded-md hover:text-white hover:bg-primer">Pesanan</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Edit Profil</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0">
              <button className="rounded-full">
                <div className="h-20 w-20 absolute rounded-full bg-gradient-to-t from-gray-800 from-5%">
                  <svg className="mt-14 mx-auto fill-gray-200" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                    height="15" viewBox="0 0 50 50">
                    <path
                      d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z">
                    </path>
                  </svg>
                </div>
                <img className="h-20 w-20 rounded-full object-cover"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile Photo">

              </button>
            </div>

            <div className="flex-1">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input id="name-edit" type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value="">
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email-edit" type="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value="ahmadsuyutisyauqi@gmail.com">
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                <input id="phone-edit" type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value="08934534665">
              </div>

              <div class="flex flex-row gap-10">

                <div class="mr-10">
                  <label class="block text-sm font-medium text-gray-700">Kecamatan</label>
                  <input id="kecamatan" type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-52" value="Tandes">
                </div>

                <div class="mr-10">
                  <label class="block text-sm font-medium text-gray-700">Kota</label>
                  <input id="kota" type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-52" value="Surabaya">
                </div>
                <div class="mr-10">
                  <label class="block text-sm font-medium text-gray-700">Kode Pos</label>
                  <input id="kodepos" type="text" class="mt-1 p-2 border border-gray-300 rounded-md w-32" value="60189">
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Alamat</label>
                <textarea id="address-edit" class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  rows="3">Jl. Balongsari tama Selatan blok 9e Nomor. 12</textarea>
              </div>

              <div class="flex flex-row-reverse lg:mr-4">
                <button type="submit" id="simpan-btn" class="btn btn-sm mt-5 ml-auto btn-warning">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  </div>   */}
    </>
  );
};

// const HeaderDashboard = () => {
//     return (
//         <header id="main-header" class="flex bg-sekunder items-center justify-between p-2 z-50 fixed w-full shadow-md h-16">

//         <div class="flex items-center w-full h-10 lg:w-52 p-2">
//           <button id="toggle-sidebar" class="text-indigo-600 px-3 py-2 rounded-full hover:bg-orange-500">
//             <svg class="swap-off fill-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="32"
//               viewBox="0 0 512 512">
//               <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
//             </svg>
//           </button>
//           <h1 class="font-bold text-3xl text-gray-200 ml-2">Dashboard</h1>
//         </div>

//         {/* <!-- Profile dan Keranjang --> */}
//         <nav id="nav-menu-desktop" class="flex">
//           <div class="navbar bg-none">
//             <div class="navbar-center lg:flex justify-around">
//               {/* <!-- Profile + Keranjang --> */}
//               <ul class="profile">
//                 <li class="">
//                   <div class="flex gap-3">
//                     {/* <!-- Keranjang Logo --> */}
//                     <div class="dropdown dropdown-end">
//                       <div tabIndex="0" role="button" class="">
//                         <div class="indicator mt-4">
//                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2"
//                               d="M3 3h2l.strokeLinejoinh10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                           </svg>
//                           <span class="badge badge-sm indicator-item">8</span>
//                         </div>
//                       </div>
//                       <div tabIndex="0" class="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow">
//                         <div class="card-body">
//                           <span class="font-semibold text-md">8 Items</span>
//                           <span class="text-orange-300 text-sm">Subtotal: $999</span>
//                           <div class="card-actions">
//                             <button class="btn btn-warning btn-sm w-32 text-sm">View cart</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* <!--Profile Picture --> */}
//                     <div class="dropdown dropdown-end">
//                       <div tabIndex="0" role="button" class="btn btn-ghost btn-circle avatar">
//                         <div class="w-9 rounded-full">
//                           <img alt="Tailwind CSS Navbar component"
//                             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//                         </div>
//                       </div>
//                       <ul tabIndex="0"
//                         class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         <li>
//                           <a class="justify-between">
//                             Profile
//                             <span class="badge">New</span>
//                           </a>
//                         </li>
//                         <li><a class="logout-btn" href="../login-klikkonveksi.html">Logout</a></li>
//                       </ul>
//                     </div>

//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//       </header>
//     )}

export default DashboardUser;
