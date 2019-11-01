<template>
  <div>
    <div class="bg-dark" style="padding-bottom: 100px">
      <div class="mb-3 logo color-white d-block d-xl-none text-center logo_mobile">
        <a href="/">
          <img src="../assets/images/logo3.svg" height="50px" />
        </a>
      </div>
      <h1
        class="color-white text-center"



      >
        Built by developers
        <br />for developers
      </h1>
      <div class="mw-620 mx-auto mt-35 f-22 color-white op-7 text-center text-adaptive">
        <span


          data-aos-delay="250"
        >Get access to outside data easily using our SDK.</span>
      </div>
    </div>
    <section class="content_1 bg-light pt-80 pb-80">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div
            class="col-xl-7 col-lg-10 text-center"



          >
            <h2 class="mt-25">Start using Razor on Rinkeby today</h2>
            <div class="color-heading text-adaptive">
              Razor is live on rinkeby and is serving price of ETH/USD, BTC/USD, etc. Query the price easily by calling our contract as shown below.
              Currently querying the oracle is free of cost.
              You can add new data URLs by going to <a href = 'https://razorscan.io' target="_blank">RazorScan</a>
            <pre v-highlightjs class = "text-left"><code class="solidity ">
pragma solidity ^0.5.7;
interface Razor {
    function getResult(uint256 id) external view returns (uint256);
}

contract Example {
    Razor public constant razor =
    Razor(0x4Bcd81d77Bb9d7493F99742b49B072c09D548CB4);

    function getEthPrice() public view returns(uint256){
        return (razor.getResult(1)); // insert jobId here
    }

    function getBtcPrice() public view returns(uint256){
        return (razor.getResult(2));
    }
}
                </code></pre>

            </div>

            <div



              class="aos-init aos-animate"
            >
              <a
                href="https://docs.razor.network/"
                target="_blank"
                class="mb-30 btn lg action-1"
              >Explore documentation</a>
              <!-- <a href="https://github.com/razor-network" target="_blank" class="mb-30 btn lg action-1">Github</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Developers",
  head() {
    return {
      title: "Developers",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Access price of Ether on Rinkeby today"
        },
        {
          name: "keywords",
          content:
            "Razor, Network, SDK, BTC, ETH, Rinkeby, Blockchain, Oracle Network"
        }
      ]
    };
  }
};
</script>

<style>
</style>
