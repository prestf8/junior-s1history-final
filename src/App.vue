<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view/>
  </div>
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TheHeader,
  }
})
export default class App extends Vue {

}

</script>

<style lang="scss">
* {
  margin:0;
  padding:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
