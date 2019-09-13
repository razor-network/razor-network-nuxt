<template>
  <div>
    <section class="content_1 bg-light pt-80 pb-80">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div
            class="col-xl-7 col-lg-10 text-center"
            data-aos-duration="500"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <h2 class="mt-25">Testnet dashboard</h2>
            <div class="color-heading text-adaptive">
              Razor steel Testnet is currently reporting price of ETH/USD and BTC/USD. The contract is deployed on
              <a
                href="https://rinkeby.etherscan.io/address/0x85805137394718708F1e679862739E51Ef89Dc00"
              >Rinkeby</a>. You can check the status of the testnet below.
            </div>
            <br />
            <div class="small">
              <line-chart :chart-data="datacollectionEth"></line-chart>
              <line-chart :chart-data="datacollectionBtc"></line-chart>
            </div>

            <div
              data-aos-duration="500"
              data-aos="fade-down"
              data-aos-delay="0"
              class="aos-init aos-animate"
            >
              <a
                href="https://rinkeby.etherscan.io/address/0x85805137394718708F1e679862739E51Ef89Dc00"
                class="mb-30 btn lg action-1"
              >Explore the Contract on Etherscan</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="alert alert-success alert-dismissible alert-form-success" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      Thanks for your message!
    </div>
    <div class="alert alert-warning alert-dismissible alert-form-check-fields" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      Please, fill in required fields.
    </div>
    <div class="alert alert-danger alert-dismissible alert-form-error" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      An error occurred while sending data :(
    </div>
    <div class="overlay"></div>

    <div class="video_popup">
      <a class="close">
        <img srcset="i/close_white@2x.png 2x" src="i/close_white.png" alt />
      </a>
      <div class="d-flex align-items-center justify-content-center w-full h-full iframe_container"></div>
    </div>
  </div>
</template>

<script>
import LineChart from "../external/LineChart";
var Web3 = require("web3");
import blockManagergAbi from "../external/contracts/contract";

let provider2 = "https://rinkeby.infura.io/v3/26056f03e83343f5bbd280bafaa52684";
// let networkid = '4' // rinkeby
let web3 = new Web3(provider2, null, {});
// let schellingBuild = require('./build/contracts/Schelling2.json')

let blockManager = new web3.eth.Contract(
  blockManagergAbi,
  "0x85805137394718708F1e679862739E51Ef89Dc00"
);
export default {
  name: "dashboard",
  head() {
    return {
      title: "Developers",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Razor steel Testnet is currently reporting price of ETH/USD and BTC/USD."
        },
        {
          name: "keywords",
          content:
            "Razor, Network, SDK, BTC, ETH, Rinkeby, Blockchain, Oracle Network, Contract"
        }
      ]
    };
  },
  components: {
    LineChart
  },

  data() {
    return {
      eth: [],
      btc: [],
      labels: [],
      blockNumber: 0,
      datacollectionEth: {},
      datacollectionBtc: {},
      chartColors: {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)"
      }
    };
  },
  mounted() {
    this.fetchData();
    // this.fillData()
  },
  methods: {
    async fetchData() {
      this.blockNumber = await web3.eth.getBlockNumber();

      let proposals = await blockManager.getPastEvents("BlockConfirmed", {
        fromBlock: Number(this.blockNumber) - 1000,
        toBlock: "latest"
      });
      for (let i = 0; i < proposals.length; i++) {
        this.eth.push(Number(proposals[i].returnValues.medians[0]) / 100);
        this.btc.push(Number(proposals[i].returnValues.medians[1]) / 100);
        this.labels.push(Number(proposals[i].returnValues.epoch));
        // console.log(this.eth)
        // console.log(Number(proposals[i].returnValues.median) / 100)
      }

      this.datacollectionEth = {
        labels: this.labels,
        datasets: [
          {
            label: "ETH/USD",
            backgroundColor: this.chartColors.blue,
            data: this.eth
          }
        ]
      };
      this.datacollectionBtc = {
        labels: this.labels,
        datasets: [
          {
            label: "BTC/USD",
            backgroundColor: this.chartColors.orange,
            data: this.btc
          }
        ]
      };
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
