<template>
  <div role = 'tablist'>
    <b-card no-body class="card">
      <b-card-header class="mb-0">
        <!-- not using b-button due to its inbuilt CSS -->
        <div
          v-b-toggle.oracle
          class="btn btn-link btn-test color-main"
        >What is an Oracle?</div>
      </b-card-header>
      <b-collapse  id="oracle" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>Oracle is an entity which feeds verified external data to the decentralized networks.</b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="card">
      <b-card-header class="mb-0" id role="tab">
        <!-- not using b-button due to its inbuilt CSS -->
        <div class="btn btn-link btn-test color-main" v-b-toggle.razor>What is Razor Network?</div>
      </b-card-header>
      <b-collapse id="razor" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>Razor Network is an oracle platform offering a high degree of decentralization and economic security.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="card">
      <b-card-header class="mb-0" id role="tab">
        <!-- not using b-button due to its inbuilt CSS -->
        <div
          class="btn btn-link color-main btn-test"
          v-b-toggle.blockchain
        >Does Razor Network have its own Network?</div>
      </b-card-header>
      <b-collapse id="blockchain" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>
            Razor Network is a network
            <!-- Proof of Stake consensus 
            algorithm  -->
            which achieves consensus on oracle values by Truth-by-consensus algorithm.
            Razor Network currently runs directly on public networks. In the future, it will run on its own Network.
          </b-card-text>
        </b-card-body>
    </b-collapse>
    </b-card>
    <!-- <b-card no-body class="card">
      <b-card-header class="mb-0 card-header" id role="tab">
        <div
          class="btn btn-link color-main btn-test"
          v-b-toggle.token
        >Does Razor Network have a Native Token?</div>
      </b-card-header>
      <b-collapse id="token" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>Schell is the native ERC20 utility token used in Razor Network for staking purposes. It has the abbreviation SCH and symbol ʂ.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
    <!-- <b-card no-body class="card">
      <b-card-header class="mb-0 card-header" id role="tab">
        <div
          class="btn btn-link color-main btn-test"

          v-b-toggle.schells
        >How can I earn Schells?</div>
      </b-card-header>
      <b-collapse id="schells" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>Schells can be earned by becoming a staker in the network. Schells are earned in the form of block rewards in the network.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
    <!-- <b-card no-body class="card">
      <b-card-header class="mb-0 card-header" id role="tab">
        <div
          class="btn btn-link color-main btn-test"

          v-b-toggle.explainer
        >I have more questions
</div>
      </b-card-header>
      <b-collapse id="explainer" accordion="my-accordion" role="tabpanel" class="animate">
        <b-card-body>
          <b-card-text>For a detailed introduction, please check <a href="https://docs.razor.network/explainer/">Explainer</a> or join our <a href="https://t.me/razornetwork">telegram</a></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
  </div>
</template>

<script>
export default {
  name: "faq"
};
</script>

<style scoped>
.btn-info {
  background: none;
  color: blue;
}

@media (max-width: 768px) {
  .btn {
    line-height: 35px;
  }
  .cursorr {
       cursor: pointer;
  }
}
</style>
