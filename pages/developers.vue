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
            <h2 class="mt-25">Access price of Ether on Rinkeby today</h2>
            <div class="color-heading text-adaptive">
              Razor is live on rinkeby and is serving price of ETH/USD. Query the price easily by calling our contract as shown below.
              Currently querying the oracle is free of cost.
            </div>
            <pre class="text-left">
                <code class="hljs solidity"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.5.7;
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">Razor</span> </span>{
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title">external</span> <span class="hljs-title">view</span> <span class="hljs-title">returns</span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Example</span> </span>{
  Razor <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> razor =
	Razor(<span class="hljs-number">0x2bDBA1258E570d32fb167AaC3D96239a48702484</span>);

  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getEthPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title">public</span> <span class="hljs-title">view</span> <span class="hljs-title">returns</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>{
   <span class="hljs-keyword">return</span> (razor.getPrice());
  }
}
</code>
            </pre>
            <div



              class="aos-init aos-animate"
            >
              <a
                href="https://github.com/razor-network/contracts"
                target="_blank"
                class="mb-30 btn lg action-1"
              >Check source code Github</a>
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
