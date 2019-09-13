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
              <!-- <a href="https://github.com/razor-network" target="_blank" class="mb-30 btn lg action-1">Github</a> -->
              <!-- <div class="color-heading text-adaptive">Commercial License</div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- forms alerts -->
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
    <!-- popup with video -->
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

let provider2 = "https://rinkeby.infura.io/v3/26056f03e83343f5bbd280bafaa52684";
// let networkid = '4' // rinkeby
let web3 = new Web3(provider2, null, {});
// let schellingBuild = require('./build/contracts/Schelling2.json')
let blockManagergAbi = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "isWriter",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "stateManager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "voteManager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "stakeManager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "address"
      }
    ],
    name: "disputes",
    outputs: [
      {
        name: "accWeight",
        type: "uint256"
      },
      {
        name: "median",
        type: "uint256"
      },
      {
        name: "lastVisited",
        type: "uint256"
      },
      {
        name: "assetId",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "proposedBlocks",
    outputs: [
      {
        name: "proposerId",
        type: "uint256"
      },
      {
        name: "iteration",
        type: "uint256"
      },
      {
        name: "biggestStake",
        type: "uint256"
      },
      {
        name: "valid",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "addWriter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceWriter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "blocks",
    outputs: [
      {
        name: "proposerId",
        type: "uint256"
      },
      {
        name: "iteration",
        type: "uint256"
      },
      {
        name: "biggestStake",
        type: "uint256"
      },
      {
        name: "valid",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "epoch",
        type: "uint256"
      },
      {
        indexed: false,
        name: "stakerId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "medians",
        type: "uint256[]"
      },
      {
        indexed: false,
        name: "iteration",
        type: "uint256"
      },
      {
        indexed: false,
        name: "biggestStakerId",
        type: "uint256"
      }
    ],
    name: "Proposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "epoch",
        type: "uint256"
      },
      {
        indexed: false,
        name: "stakerId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "medians",
        type: "uint256[]"
      }
    ],
    name: "BlockConfirmed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      }
    ],
    name: "WriterAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      }
    ],
    name: "WriterRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "a",
        type: "uint256"
      }
    ],
    name: "DebugUint256",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      }
    ],
    name: "getBlock",
    outputs: [
      {
        components: [
          {
            name: "proposerId",
            type: "uint256"
          },
          {
            name: "medians",
            type: "uint256[]"
          },
          {
            name: "iteration",
            type: "uint256"
          },
          {
            name: "biggestStake",
            type: "uint256"
          },
          {
            name: "valid",
            type: "bool"
          }
        ],
        name: "_block",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      }
    ],
    name: "getBlockMedians",
    outputs: [
      {
        name: "_blockMedians",
        type: "uint256[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      },
      {
        name: "proposedBlock",
        type: "uint256"
      }
    ],
    name: "getProposedBlock",
    outputs: [
      {
        components: [
          {
            name: "proposerId",
            type: "uint256"
          },
          {
            name: "medians",
            type: "uint256[]"
          },
          {
            name: "iteration",
            type: "uint256"
          },
          {
            name: "biggestStake",
            type: "uint256"
          },
          {
            name: "valid",
            type: "bool"
          }
        ],
        name: "_block",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      },
      {
        name: "proposedBlock",
        type: "uint256"
      }
    ],
    name: "getProposedBlockMedians",
    outputs: [
      {
        name: "_blockMedians",
        type: "uint256[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      }
    ],
    name: "getNumProposedBlocks",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_stakeManagerAddress",
        type: "address"
      },
      {
        name: "_stateManagerAddress",
        type: "address"
      },
      {
        name: "_voteManagerAddress",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      },
      {
        name: "medians",
        type: "uint256[]"
      },
      {
        name: "iteration",
        type: "uint256"
      },
      {
        name: "biggestStakerId",
        type: "uint256"
      }
    ],
    name: "propose",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      },
      {
        name: "assetId",
        type: "uint256"
      },
      {
        name: "sorted",
        type: "uint256[]"
      }
    ],
    name: "giveSorted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      }
    ],
    name: "resetDispute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "epoch",
        type: "uint256"
      },
      {
        name: "blockId",
        type: "uint256"
      }
    ],
    name: "finalizeDispute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "iteration",
        type: "uint256"
      },
      {
        name: "biggestStakerId",
        type: "uint256"
      },
      {
        name: "stakerId",
        type: "uint256"
      }
    ],
    name: "isElectedProposer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "confirmBlock",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

let blockManager = new web3.eth.Contract(
  blockManagergAbi,
  "0x85805137394718708F1e679862739E51Ef89Dc00"
);
export default {
  name: "dashboard",

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
