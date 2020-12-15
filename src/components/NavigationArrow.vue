<template>
    <a href="#content-section"><font-awesome-icon icon="angle-double-down" /></a>
</template>

<script lang="ts">
import {Vue,Component} from "vue-property-decorator";


@Component
export default class NavigationArrow extends Vue {

}
</script>

<style lang="scss">

a[href="#content-section"] {
  font-size: 3rem;
  color: white;
  text-decoration: none;
  position: absolute;
  bottom:2rem;
  left: 50%;
  transform: translate(-50%);

  animation: arrowAnimation 1s linear infinite;
}
</style>