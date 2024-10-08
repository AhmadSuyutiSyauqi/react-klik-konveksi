import { useState } from "react";

const DashboardAdmin = () => {

const [isCollapsed, setIsCollapsed] = useState(false);

const handleToggle = () => {
  setIsCollapsed(!isCollapsed);
}

  return (
    <>

      <header
        id="main-header"
        class="flex bg-sekunder items-center justify-between p-2 z-50 fixed w-full shadow-md"
      >
        <div class="flex items-center w-full h-10 p-2">
          <button
            id="toggle-sidebar"
            class="text-indigo-600 px-3 py-2 rounded-full hover:bg-orange-500"
            onClick={() => handleToggle()}
          >
            <svg
              class="swap-off fill-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
          <h1 class="font-bold text-3xl text-gray-200 ml-2">Dashboard Admin</h1>
        </div>

        {/* <!-- Profile dan Keranjang --> */}
        <nav id="nav-menu-desktop" class="flex">
          <div class="navbar bg-none">
            <div class="navbar-center lg:flex justify-around">
              {/* <!-- Profile + Keranjang --> */}
              <ul class="profile">
                <li class="">
                  <div class="flex gap-3">
                    {/* <!-- Keranjang Logo --> */}
                    <div class="dropdown dropdown-end">
                      <div tabindex="0" role="button" class="">
                        <div class="indicator mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span class="badge badge-sm indicator-item">8</span>
                        </div>
                      </div>
                      <div
                        tabindex="0"
                        class="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow"
                      >
                        <div class="card-body">
                          <span class="font-semibold text-md">8 Items</span>
                          <span class="text-orange-300 text-sm">
                            Subtotal: $999
                          </span>
                          <div class="card-actions">
                            <button class="btn btn-warning btn-sm w-32 text-sm">
                              View cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!--Profile Picture --> */}
                    <div class="dropdown dropdown-end">
                      <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost btn-circle avatar"
                      >
                        <div class="w-9 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          />
                        </div>
                      </div>
                      <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a class="justify-between" href="profile.html">
                            Profile
                            <span class="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <a class="logout-btn" href="/login">Logout</a>
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

      <div id="profile" class="min-h-screen flex flex-col pt-14">
        <div class="flex flex-1">
          {/* <!-- Sidebar --> */}
          <aside
            id="sidebar"
            class={`bg-white w-64 shadow-lg transform transition-transform translate-x-0 ${isCollapsed ? 'collapsed' : ''}`}
          >
            <div class="px-6 py-4">
              <h2 id="text-menu" class={`text-2xl font-semibold mb-4 mt-4 ${isCollapsed ? '-ml-2' : ''}`}>
                Menu
              </h2>
              <nav className={``}>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="dashboard-admin.html"
                      class="text-primer block py-2 px-4 rounded-md"
                    >
                      Statistik Penjualan
                    </a>
                  </li>
                  <li>
                    <a
                      href="tampilan-produk.html"
                      class="text-gray-700 block py-2 px-4 rounded-md hover:text-white hover:bg-primer"
                    >
                      Tampilan Produk
                    </a>
                  </li>
                  <li>
                    <a
                      href="chat-user.html"
                      class="text-gray-700 block py-2 px-4 rounded-md hover:text-white hover:bg-primer"
                    >
                      Chat User
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* <!-- Main Content --> */}
          <main class="flex-1 p-6">
            <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-6">Statistik Penjualan</h2>

            <div class="flex flex-col lg:flex-row gap-4">
              {/* <!-- component --> */}
              <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-100 dark:bg-gray-800 hover:scale-110 transition ease-out duration-300 hover:bg-gray-200">
                  <div class="p-4 flex items-center">
                    <div class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="w-5 h-5"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total pengguna
                      </p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        6389
                      </p>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-100 dark:bg-gray-800 hover:scale-110 transition ease-out duration-300 hover:bg-gray-200">
                  <div class="p-4 flex items-center">
                    <div class="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Pendapatan Bulan ini
                      </p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        Rp. 1.230.000
                      </p>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-100 dark:bg-gray-800 hover:scale-110 transition ease-out duration-300 hover:bg-gray-200">
                  <div class="p-4 flex items-center">
                    <div class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="w-5 h-5"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total penjualan
                      </p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        376
                      </p>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-gray-100 dark:bg-gray-800 hover:scale-110 transition ease-out duration-300 hover:bg-gray-200">
                  <a class="p-4 flex items-center" href="chat-user.html">
                    <div class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Chat yang belum dibaca
                      </p>
                      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        35
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </main>
        </div>
      </div>

    </>
  );
};

export default DashboardAdmin;
