const Header = () => {
    return (
        <header>
            <div class="container w_1200 m-auto">
                <div class="ht_wrapper d-flex justify-content-between">
                    {/* LOGO Container */}
                    <div class="logo position-relative d-none d-lg-block">
                        <a href="./index.html">
                            <h4 class="position-absolute m-0 bottom-0">MARKIE</h4>
                        </a>
                    </div>
                    <div class="text-end">
                        {/* Social Media Icons */}
                        <div class="d-none d-lg-flex social justify-content-end py-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="#03001e" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                    <path fill="#03001e" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                    <path fill="#03001e" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                                    <path fill="#03001e" d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z" />
                                </svg>
                            </div>
                        </div>
                        {/* Message Below Social Media Icons */}
                        <div class="d-none d-lg-block ln_0 py-2">
                            <p class="m-0">Delivery Within 2-Days To All 36 States Of Nigeria</p>
                        </div>
                        <div class="d-flex ln_1 justify-content-end">
                            {/* Desktop Search Bar */}
                            <div class="d_search_bar">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="Search_bar_d" />
                                    <span class="input-group-text" id="Search_bar_d">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50">
                                            <path fill="currentColor" d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11z" />
                                            <path fill="currentColor" d="m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="m_menu my-auto d-lg-none"></div>
                                {/* LOGO Container */}
                                <div class="my-auto d-lg-none">
                                    <a class="text-decoration-none" href="./index.html">
                                        <h3 class="my-auto">MARKIE</h3>
                                    </a>
                                </div>
                                <div class="d-flex">
                                    {/* Account Icon */}
                                    <div class="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="1.35em" height="1.25em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1792">
                                            <path fill="#03001e" d="M1201 784q47 14 89.5 38t89 73t79.5 115.5t55 172t22 236.5q0 154-100 263.5T1195 1792H341q-141 0-241-109.5T0 1419q0-131 22-236.5t55-172T156.5 895t89-73t89.5-38q-79-125-79-272q0-104 40.5-198.5T406 150T569.5 40.5T768 0t198.5 40.5T1130 150t109.5 163.5T1280 512q0 147-79 272zM768 128q-159 0-271.5 112.5T384 512t112.5 271.5T768 896t271.5-112.5T1152 512t-112.5-271.5T768 128zm427 1536q88 0 150.5-71.5T1408 1419q0-239-78.5-377T1104 897q-145 127-336 127T432 897q-147 7-225.5 145T128 1419q0 102 62.5 173.5T341 1664h854z" />
                                        </svg>
                                        <p class="d-none d-lg-block m-auto">Account</p>
                                    </div>
                                    {/* Cart Icon */}
                                    <div class="d-flex">
                                        <button class="border border-0 bg-transparent d-inline-flex my-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartlist" aria-controls="cartlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="1.45em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                                <path fill="#03001e" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479l9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
                                            </svg>
                                            <span class="d-none d-lg-block m-auto" style={{ paddingTop: "0.18rem" }}>
                                                Cart
                                            </span>
                                        </button>

                                        <div class="offcanvas offcanvas-end ps-2" tabIndex="-1" id="cartlist" aria-labelledby="cartlistLabel">
                                            <div class="offcanvas-header pb-0 px-4 mt-2">
                                                <h5 class="cartlistLabel heading">SHOPPING CART</h5>
                                                <button type="button" class="btn-close text-reset pe-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div class="offcanvas-body py-0">
                                                {/* Top */}
                                                <div class="item_count text-start c-top px-4">
                                                    <span>3</span>
                                                    <span>Items</span>
                                                </div>
                                                {/* Scrollable Mid */}
                                                <div class="pt-3 ps-1 c-mid px-4">
                                                    <div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 1.png" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Purple / XXL</p>
                                                                <p class="pb-1">&#x20A6; 5800</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 2.jpg" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Lemon Green / L</p>
                                                                <p class="pb-1">&#x20A6; 8000</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 8.png" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Brown / SM</p>
                                                                <p class="pb-1">&#x20A6; 7000</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Bottom */}
                                                <div class="c-btm px-4">
                                                    <div class="w-100 d-flex justify-content-between pt-3 pb-1">
                                                        <p>Total:</p>
                                                        <p>&#x20A6; 20,800</p>
                                                    </div>
                                                    <div class="pt-1 pb-3">
                                                        <div class="form-check text-start ps-4">
                                                            <input class="form-check-input me-3" type="checkbox" value="" id="T&C" />
                                                            <label class="form-check-label" for="T&C">
                                                                {" "}
                                                                I Agree With The Terms and Conditions{" "}
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-md w-100 py-2 mb-3">
                                                            CHECKOUT
                                                        </button>{" "}
                                                        <br />
                                                        <a href="./cart.html" class="btn btn-md w-100 py-2">
                                                            VIEW CART
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Wish list Icon */}
                                    <div class="d-flex">
                                        <button class="border-0 bg-transparent d-inline-flex m-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#wishlist" aria-controls="wishlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="1.4em" height="1.35em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z" />
                                            </svg>
                                            <span class="d-none d-lg-block m-auto space">Wishlist</span>
                                        </button>

                                        <div class="offcanvas offcanvas-end ps-2" tabIndex="-1" id="wishlist" aria-labelledby="wishlistLabel">
                                            <div class="offcanvas-header pb-0 px-4 mt-2">
                                                <h5 class="wishlistLabel heading">WISHLIST</h5>
                                                <button type="button" class="btn-close text-reset pe-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div class="offcanvas-body py-0">
                                                {/* Top */}
                                                <div class="item_count text-start w-top px-4">
                                                    <span>4</span>
                                                    <span>Items</span>
                                                </div>
                                                {/* Scrollable Mid */}
                                                <div class="pt-3 ps-1 w-mid px-4">
                                                    <div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 1.png" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Purple / XXL</p>
                                                                <p class="pb-1">&#x20A6; 5800</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 2.jpg" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Lemon Green / L</p>
                                                                <p class="pb-1">&#x20A6; 8000</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 8.png" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Brown / SM</p>
                                                                <p class="pb-1">&#x20A6; 7000</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex w-100 justify-content-between py-4 ms-4">
                                                            <div class="col-3 pe-2">
                                                                <img src="./assets/images/pic 7.jpg" class="d-block w-100 h-100" alt="..." />
                                                            </div>
                                                            <div class="col-5 text-start ps-2 m-auto">
                                                                <p class="pb-1">Scrub Top</p>
                                                                <p class="pb-1">Lemon Green / L</p>
                                                                <p class="pb-1">&#x20A6; 8000</p>
                                                            </div>
                                                            <div class="col-1 pt-2 m-auto">
                                                                <button type="button" class="btn-close text-reset"></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Bottom */}
                                                <div class="w-btm px-4">
                                                    <div class="pt-3">
                                                        <a href="./wishlist.html" class="btn btn-md w-100 py-2">
                                                            VIEW WISHLIST
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_bottom mt-1 d-none d-lg-block">
                {/* Menu */}
                <div class="cat container w_1200">
                    <ul class="h_list d-flex">
                        <li class="menu">
                            <a href="./category.html">Wardcoats</a>
                        </li>
                        <li class="menu">
                            <a href="./category.html">Scrubs</a>
                        </li>
                        <li class="menu">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle border-0 p-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Footwears
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            Crocs
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            Sneakers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu">
                            <a href="./category.html">Inscription T-Shirts</a>
                        </li>
                        <li class="menu">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle border-0 p-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accessories
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            Pen Torch
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            Scrub Caps
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            ID Card Holder
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            Medical Brooches
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./category.html">
                                            Scrub Inner T-Shirt
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
