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
        data-aos-duration="500"
        data-aos="fade-down"
        data-aos-delay="0"
      >
        Built by developers
        <br />for developers
        <!-- <div style="display: inline-block" class="finance animated">Finance</div> -->
        <!-- <div class="insurance">Insurance</div> -->
      </h1>
      <div class="mw-620 mx-auto mt-35 f-22 color-white op-7 text-center text-adaptive">
        <span data-aos-duration="500" data-aos="fade-down" data-aos-delay="250">
          Get access to outside data easily using our SDK.
          <!-- Blockchains do not have access to the data from outside the blockchain. Such data is necessary for operation of various decentralized applications.

Traditionally this is done by using a centralized entities called “Oracles”. But they are a single point of failure in otherwise decentralized applications and must be trustworthy.

          Razor is truly decentralized oracle platform offering a high degree of decentralization and economic security, which is crucial for decentralized finance applications.-->
        </span>
      </div>
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
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="0"
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
  name: "Developers"
};
</script>

<style>
</style>