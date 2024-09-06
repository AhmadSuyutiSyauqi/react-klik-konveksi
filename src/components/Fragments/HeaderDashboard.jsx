const HeaderDashboard = () => {
    return (
        <header id="main-header" class="flex bg-sekunder items-center justify-between p-2 z-50 fixed w-full shadow-md h-16">

        <div class="flex items-center w-full h-10 lg:w-52 p-2">
          <button id="toggle-sidebar" class="text-indigo-600 px-3 py-2 rounded-full hover:bg-orange-500">
            <svg class="swap-off fill-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
          <h1 class="font-bold text-3xl text-gray-200 ml-2">Dashboard</h1>
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
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span class="badge badge-sm indicator-item">8</span>
                        </div>
                      </div>
                      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow">
                        <div class="card-body">
                          <span class="font-semibold text-md">8 Items</span>
                          <span class="text-orange-300 text-sm">Subtotal: $999</span>
                          <div class="card-actions">
                            <button class="btn btn-warning btn-sm w-32 text-sm">View cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* <!--Profile Picture --> */}
                    <div class="dropdown dropdown-end">
                      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-9 rounded-full">
                          <img alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                          <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                          </a>
                        </li>
                        <li><a class="logout-btn" href="../login-klikkonveksi.html">Logout</a></li>
                      </ul>
                    </div>
    
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
      </header>
    )}

    export default HeaderDashboard;