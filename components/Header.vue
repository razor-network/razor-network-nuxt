<template>
<div>
    <a class="open_menu color-main bg-light radius_full" @click="test='block'">
        <i class="fas fa-bars lh-40"></i>
    </a>
    <div class="navigation_mobile bg-light type2" :style="{'display': test }">
        <a class="close_menu color-main">
            <i class="fas fa-times"></i>
        </a>
        <div class="px-40 pt-60 pb-60 text-center inner">
            <div>
                <nuxt-link to="/" class="f-heading f-22 link color-main mb-20">Home</nuxt-link>
                <!-- <a href="/" class="f-heading f-22 link color-main mb-20">Home</a> -->
            </div>
            <!-- <div>
                <a class="f-heading f-22 link color-main mb-20" href="https://razorscan.io">Testnet</a>

            </div> -->

            <!-- <div>
          <a class="f-heading f-22 link color-main mb-20" href="https://razorscan.io">Products</a>

        </div> -->
            <div>
                <nuxt-link to="/developers" class="f-heading f-22 link color-main mb-20">Developers</nuxt-link>
            </div>
            <div>
                <!-- <nuxt-link to="/mobile" class="f-heading f-22 link color-main mb-20">Mobile</nuxt-link> -->
            </div>
            <div>
                <a href="https://docs.razor.network" class="f-heading f-22 link color-main mb-20">Documentation</a>
            </div>
            <div>
                <a class="f-heading f-22 link color-main mb-20" target="_blank" href="https://razorscan.io">RazorScan</a>
            </div>
            <!-- <div>
                <a class="f-heading f-22 link color-main mb-20" target="_blank" href="https://deltaone.finance">DeltaOne</a>
            </div> -->
            <!-- <div><a href="#" class="f-heading f-22 link color-main mb-20">Featured</a></div>
		<div><a href="#" class="f-heading f-22 link color-main mb-20">Designers</a></div>
        <div><a href="#" class="f-heading f-22 link color-main mb-40">Team</a></div>-->

            <!-- <div><a href="#" class="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Help</a></div>
		<div><a href="#" class="f-12 link color-main op-7 text-uppercase sp-20 mb-20">F.A.Q.</a></div>
		<div><a href="#" class="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Support</a></div>
		<div><a href="#" class="f-12 link color-main op-7 text-uppercase sp-20 mb-20">About Us</a></div>
		<div><a href="#" class="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Blog</a></div>
        <div><a href="#" class="f-12 link color-main op-7 text-uppercase sp-20 mb-20">Careers</a></div>-->

            <div class="socials mt-120">
                <a href="https://t.me/razornetwork" target="_blank" class="link color-main f-18 mx-10"><i class="fab fa-telegram"></i></a>
                <a href="https://twitter.com/razor_network" target="_blank" class="link color-main f-18 mx-10"><i class="fab fa-twitter"></i></a>
                <a href="https://medium.com/razor-network" target="_blank" class="link color-main f-18 mx-10"><i class="fab fa-medium"></i></a>
                <a href="https://github.com/razor-network" target="_blank" class="link color-main f-18 mx-10"><i class="fab fa-github"></i></a>

            </div>
        </div>
    </div>

    <!-- Header 2 -->

    <header class="pt-190 bg-dark header_2">
        <!-- <video autoplay muted loop>
               <source src="./data.mp4" type="video/mp4">
      </video>-->
        <!-- Header Menu 2 -->

        <nav class="header_menu_2 transparent pt-20 pb-500 mt-20">
            <div class="container px-xl-0">
                <div class="row justify-content-between">
                    <div class="col-md-4">
                        <div class="logo color-white">
                            <nuxt-link to="/">
                                <img alt="logo" src="../assets/images/logo3.svg" height="50" />
                            </nuxt-link>
                        </div>
                    </div>
                    <!-- <span data-aos-duration="0"  data-aos-delay="750" >
					<a  class=" link color-white" style = "padding: .5rem 1rem;" href="dashboard.html">Testnet</a>
					<a   class=" link color-white" style = "padding: .5rem 1rem;" href="https://github.com/razor-network/whitepaper/raw/master/Razor%20Network%20Whitepaper%200.4.pdf">Whitepaper</a>
            </span>-->
                    <div class="col-md-2 d-flex justify-content-end align-items-center">
                        <!-- <a href="#" class="link color-white f-18 mx-15">Features</a>
					<a href="#" class="link color-white f-18 mx-15">Team</a>
              <a href="#" class="btn sm action-2 mx-15">Contact</a>-->
                        <!-- <a href="https://razorscan.io" class="link color-white f-18 mx-15">Testnet</a> -->
                        <!-- <div class="dropdown show"> -->
                        <!-- <a href="#" class="link color-white f-18 mx-15 dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a> -->
                        <!-- <b-dropdown id="dropdown-1" text="Products" class="link color-white f-18 mx-15">
                              <b-dropdown-item class =" " target="_blank" href="https://razorscan.io">RazorScan</b-dropdown-item>
                              <!-- <b-dropdown-divider></b-dropdown-divider> -->

                        <!-- <b-dropdown-item class =""  target="_blank" href="https://deltaone.finance">DeltaOne</b-dropdown-item> -->
                        <!-- </b-dropdown> -->
                        <!-- <li class="nav-item dropdown">
       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Dropdown
       </a>
       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         <a class="dropdown-item" href="#">Action</a>
         <a class="dropdown-item" href="#">Another action</a>
         <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Something else here</a>
       </div>
     </li> -->
                        <!-- <b-nav-item-dropdown text="Products" class="link color-white f-18 mx-15"> -->
                            <!-- <b-dropdown-item target="_blank" href="https://razorscan.io">RazorScan</b-dropdown-item> -->
                            <!-- <b-dropdown-item target="_blank" href="https://deltaone.finance">DeltaOne</b-dropdown-item> -->
                        <!-- </b-nav-item-dropdown> -->
                        <nuxt-link to="/developers" class="link color-white f-18 mx-15">Developers</nuxt-link>
                        <!-- <nuxt-link to="/mobile" class="link color-white f-18 mx-15">Mobile</nuxt-link> -->
                        <a class="link color-white f-18 mx-15" href="https://docs.razor.network">Documentation</a>

                        <a href="https://t.me/razornetwork" class="mx-15 link color-white">
                            <i class="fab fa-telegram fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/razor_network" class="mx-15 link color-white">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://medium.com/razor-network" target="_blank" class="mx-15 link color-white">
                            <i class="fab fa-medium fa-2x"></i>
                        </a>
                        <a href="https://github.com/razor-network" class="mx-15 link color-white">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</div>
</template>

<script>
export default {
    name: "headers",
    data() {
        return {
            test: ""
        };
    }
};
</script>

<style lang="scss">
@media (max-width: 1199.98px) {
    .header_menu_2 {
        display: none;
    }
}

.nav-link {
    color: white;
    &:active,
    &:focus,
    &:hover {
        color: white;
    }
}

.dropdown-menu {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
