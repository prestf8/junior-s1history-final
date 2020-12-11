<template>
  <div id="header">
    <section class="header__logo-container">
      <h3 class="header__logo">S1 History Final</h3>
    </section>
    <nav class="header__content">
      <ul class="header__ul">
        <li class="header__link-c">
          <router-link to="/" exact>Home</router-link>
        </li>
        <li class="header__link-c">
          <router-link to="/historical-figure" exact
            >Historical Figure</router-link
          >
        </li>
        <li class="header__link-c">
          <router-link to="/interview" exact>Interview</router-link>
        </li>
        <li class="header__link-c">
          <router-link to="/myself" exact>Myself</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Montserrat - title
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

// Noto Sans JP - router-link tags
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

$darkBlue: rgb(0, 0, 14);

// Default colors
$vueGreen: #42b983;

@mixin changeFont($font) {
  font-family: $font, sans-serif;
}

#header {
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
}

.header__logo-container {
  text-transform: uppercase;
  display: none;
  padding: 0.2rem 1rem;
  background-color: red;
  @include changeFont('Montserrat');
}

.header__content {
  width: 100%;
  max-width: 500px;
  background-color: gray;
  margin: auto;
}

.header__ul {
  list-style: none;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  // text-align: center;

  li {
    padding: 1rem;
    a {
      font-weight: bold;
      color: $darkBlue;
      // padding: 0.4em 0.1rem;
      text-decoration: none;
      transition-duration: 0.5s;
      @include changeFont('Noto Sans JP');

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

@media screen and (min-width: 550px) {
  .header__logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__content {
    margin: 0;
  }

  .header__ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    max-width: initial;
    width: 100%;

    li {
      padding: 1.7rem 0.6rem;

      a {
        font-weight: bold;
        color: $darkBlue;
        padding: 0.5em 0.2rem;
        text-decoration: none;
        transition-duration: 0.2s;

        &.router-link-exact-active {
          color: $vueGreen;
        }

        &:hover {
          color: $vueGreen;
          border-bottom: 2px solid $vueGreen;
        }
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .header__logo-container {
    font-size: 1.3rem;
  }

  .header__link-c {
    a {
      font-size: 1.1rem;
    }
  }
}

@media screen and (min-width: 1600px) {
  .header__logo-container {
    font-size: 1.5rem;
  }
}
</style>
