<template>
  <header class="bg-dark header_2">
    <!-- <div class="bg-dark"> -->
    <div class="mb-3 logo color-white d-block d-xl-none text-center logo_mobile">
      <a href="/">
        <img src="../assets/images/logo3.svg" height="50px" />
      </a>
    </div>
    <h1
      class="color-white text-center"
      data-aos-duration="500"
      data-aos="fade-down"
      data-aos-delay="0"
    >
      Truly decentralized oracle network
      <br />for decentralized
      <div style="display: inline-block" class="animated faster" v-bind:class="classes">{{text}}</div>
    </h1>
    <div class="mw-620 mx-auto mt-35 f-22 color-white op-7 text-center text-adaptive">
      <span data-aos-duration="500" data-aos="fade-down" data-aos-delay="250">
        Razor is the world's first decentralized oracle network with onchain governance, offering high economic security
        <!-- Blockchains do not have access to the data from outside the blockchain. Such data is necessary for operation of various decentralized applications.

Traditionally this is done by using a centralized entities called “Oracles”. But they are a single point of failure in otherwise decentralized applications and must be trustworthy.

        Razor is truly decentralized oracle platform offering a high degree of decentralization and economic security, which is crucial for decentralized finance applications.-->
      </span>
    </div>

    <!-- <form class="row align-items-center justify-content-center no-gutters mt-70" data-aos-duration="500" data-aos="fade-down" data-aos-delay="500" method="POST" action="form-handler.php"> -->
    <form
      class="row align-items-center justify-content-center no-gutters mt-70 mb-130 text-center"
      data-aos-duration="500"
      data-aos="fade-down"
      data-aos-delay="500"
      action="https://gmail.us20.list-manage.com/subscribe/post?u=32e904d07df33d9c4d5d756eb&amp;id=f3daba9fa6&c"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      novalidate
    >
      <div class="col-xl-6 flex-wrap justify-content-center justify-content-md-between holder">
        <!-- <div id="mc_embed_signup_scroll" class="input-group input-group-sm mb-3"> -->
        <!-- <label for="mce-EMAIL">Subscribe</label> -->
        <input
          type="email"
          value
          name="EMAIL"
          class="mw-320 input lg border-transparent-white focus-white color-white placeholder-transparent-white f-20"
          id="mce-EMAIL"
          placeholder="Your email"
          required
        />
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_32e904d07df33d9c4d5d756eb_f3daba9fa6" tabindex="-1" value />
        </div>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="btn action-1 lg"
        />
      </div>
    </form>

    <div class="color-white op-3 text-center mt-35">
      <span data-aos-duration="500" data-aos="fade-down" data-aos-delay="750">
        Subscribe to our newsletter for latest updates
        <!-- <a href="#" class="link color-white">Terms of Service</a> -->
      </span>
    </div>

    <section class="content_1 bg-light pt-80 pb-80">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div
            class="col-xl-7 col-lg-10 text-center"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <h2 class="mt-25">Truly decentralized oracles are here</h2>
            <div class="color-heading text-adaptive">
              Blockchains do not have access to the data from outside the blockchain. Such data is necessary for operation of various decentralized applications. This problem is solved by oracles.
              Razor is truly decentralized oracle platform offering a high degree of decentralization and economic security, which is crucial for decentralized finance applications.
            </div>

            <div
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="0"
              class="aos-init aos-animate"
            >
              <a href="whitepaper.pdf" class="mb-30 btn lg action-1">Whitepaper</a>
              <a
                href="https://github.com/razor-network"
                target="_blank"
                class="mb-30 btn lg action-1"
              >Github</a>
              <!-- <div class="color-heading text-adaptive">Commercial License</div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature_1 bg-dark pt-105 pb-45 text-center">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <h2
              class="mb-45 small color-white"
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="0"
            >Features</h2>
            <div class="row justify-content-center">
              <div
                class="col-md-4 mb-50"
                data-aos-duration="500"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <i class="fas fa-chart-pie f-60 action-3 color-white"></i>
                <div class="mt-20 mb-25 f-22 title color-white">
                  Proof Of Stake
                  <br />
                </div>
                <div
                  class="color-white text-adaptive"
                >Stakers are encouraged to behave in an honest and timely manner, or they risk losing their stake.</div>
              </div>

              <div
                class="col-md-4 mb-50"
                data-aos-duration="500"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <i class="fas fa-shield-alt f-60 action-3 color-white"></i>
                <div class="mt-20 mb-25 f-22 title color-white">High economic security</div>
                <div
                  class="color-white text-adaptive"
                >Every Staker in the Razor contributes to the economic security. Just like Ethereum or Bitcoin.</div>
              </div>

              <div
                class="col-md-4 mb-50"
                data-aos-duration="500"
                data-aos="fade-down"
                data-aos-delay="750"
              >
                <i class="fas fa-users f-60 action-3 color-white"></i>
                <div class="mt-20 mb-25 f-22 title color-white">Truly decentralized</div>
                <div
                  class="color-white text-adaptive"
                >End-to-end decentralized oracle network with high resilience towards collusion and bribing attacks.</div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                class="col-md-4 mb-50"
                data-aos-duration="500"
                data-aos="fade-down"
                data-aos-delay="250"
              >
                <i class="fas fa-gavel f-60 action-3 color-white"></i>

                <!-- <i class="fas fa-briefcase f-60 action-3"></i> -->
                <div class="mt-20 mb-25 f-22 title color-white">
                  Onchain Governance
                  <br />
                </div>
                <div
                  class="color-white text-adaptive"
                >The first and only oracle network with onchain governance. Razor can self adapt to changing environment and protect the network from various attacks.</div>
              </div>

              <div
                class="col-md-4 mb-50"
                data-aos-duration="500"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <i class="fas fa-expand-arrows-alt f-60 color-white"></i>
                <div class="mt-20 mb-25 f-22 title color-white">Scalability</div>
                <div
                  class="color-white text-adaptive"
                >Can be deployed on layer 2 solutions for practically infinite scaling.</div>
              </div>

              <div
                class="col-md-4 mb-50"
                data-aos-duration="500"
                data-aos="fade-down"
                data-aos-delay="750"
              >
                <i class="fas fa-calendar-alt f-60 action-3 color-white"></i>
                <div class="mt-20 mb-25 f-22 title color-white">Stability over long term</div>
                <div
                  class="color-white text-adaptive"
                >Razor can self adjust to changes in the environment and provide reliable results over long term.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="call_to_action_1 bg-light pt-110 pb-95 text-center">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div
            class="col-xl-8 col-lg-10"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <h2>FAQs</h2>
          </div>
          <div
            class="col-xl-7 col-lg-9 col-md-10"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <FAQ />
          </div>
        </div>
      </div>
    </section>
    <!-- Call to Action 1 -->

    <section class="call_to_action_1 bg-dark pt-110 pb-95 text-center color-white">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div
            class="col-xl-8 col-lg-10"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <h2>Get in touch!</h2>
          </div>
          <div class="col-xl-7 col-lg-9 col-md-10 color-white">
            <div
              class="mt-20 mb-60 f-22 text-adaptive description color-white"
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="250"
            >Application developers interested in using the platform, and for partnership enquiries, please contact us.</div>
            <div data-aos-duration="500" data-aos="fade-down" data-aos-delay="500">
              <a href="https://forms.gle/soV7ZCjottt4Y2EP6" class="mb-30 btn lg action-1">Contact us</a>
              <!-- <div class="color-heading text-adaptive">Commercial License</div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- </div> -->
  </header>
</template>

<script>
import FAQ from "./FAQ";
import { setInterval, setTimeout } from "timers";
export default {
  name: "container",
  components: {
    FAQ
  },
  data() {
    return {
      text: "Finance",
      dataText: [
        "Finance",
        "Prediction markets",
        "Insurance",
        "Synthetic assets",
        "Stablecoins",
        "Identity",
        "Atomic swaps",
        "Finance",
        "Lending"
      ],
      i: 0,
      classes: ""
    };
  },
  methods: {
    change: function() {
      const that = this;
      setInterval(() => {
        if (that.i == 8) {
          that.i = 0;
          that.text = that.dataText[that.i];
        } else {
          that.i = that.i + 1;
          that.text = that.dataText[that.i];
        }
        that.classes = "fadeInDown";
      }, 1600);
    },
    changeClass: function() {
      const that = this;
      setInterval(() => {
        that.classes = "fadeOutDown";
      }, 1600);
    }
  },
  mounted: function() {
    this.changeClass();
    setTimeout(() => {
      this.change();
    }, 600);
  }
};
</script>

<style>
.container1 {
  height: 100vh;
}
</style>