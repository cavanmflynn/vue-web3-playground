<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Web3 from 'web3';

@Component({})
export default class App extends Vue {
  private web3!: Web3;

  mounted() {
    // Assumes web3 Object on window (MetaMask)
    this.web3 = new Web3(window.web3.currentProvider);
  }
}
</script>
