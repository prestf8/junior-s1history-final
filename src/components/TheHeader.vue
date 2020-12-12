<template>
  <div id="header">
    <!-- Laptop+ Layout !-->
    <!-- <section class="header__logo-container">
      <router-link class="header__logo" to="/" exact>
        S1 History Final
      </router-link>
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
    </nav> -->

    <!-- Mobile Layout !-->

    <!--Menu Toggle !-->
    <section class="header__menu-section">
      <font-awesome-icon icon="bars" @click="toggleMenu"/>
    </section>


    <!-- Menu -->
    <section class="header__menu" :class="[{active: this.menuActivated}]" v-show="menuActivated">
      <div class="header__menu-header">
        <font-awesome-icon icon="times" @click="toggleMenu"/>

        <section class="header__logo-container header__logo-container--menu">
          <router-link class="header__logo header__logo--menu" to="/" exact>
            S1 History Final
          </router-link>
        </section>
      </div>


      <nav class="header__content header__content--menu">
        <ul class="header__ul header__ul--menu">
          <li class="header__link-c header__link-c--menu">
            <router-link to="/" exact>Home</router-link>
          </li>
          <li class="header__link-c header__link-c--menu">
            <router-link to="/historical-figure" exact
              >Historical Figure</router-link>
          </li>
          <li class="header__link-c header__link-c--menu">
            <router-link to="/interview" exact>Interview</router-link>
          </li>
          <li class="header__link-c header__link-c--menu">
            <router-link to="/myself" exact>Myself</router-link>
          </li>
        </ul>
      </nav>
    </section>

    <!-- Logo Container !-->
    <section class="header__logo-container">
      <router-link class="header__logo" to="/" exact>
        S1 History Final
      </router-link>
    </section>

    <nav class="header__content header__content--header">
      <ul class="header__ul header__ul--header">
        <li class="header__link-c header__link-c--header">
          <router-link to="/" exact>Home</router-link>
        </li>
        <li class="header__link-c header__link-c--header">
          <router-link to="/historical-figure" exact
            >Historical Figure</router-link
          >
        </li>
        <li class="header__link-c header__link-c--header">
          <router-link to="/interview" exact>Interview</router-link>
        </li>
        <li class="header__link-c header__link-c--header">
          <router-link to="/myself" exact>Myself</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {
  private menuActivated = false;

  public toggleMenu() {
    this.menuActivated = !this.menuActivated;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Montserrat - title
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

// Noto Sans JP - router-link tags
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

// Nunito - router-link (ALL)
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');


$darkBlue: rgb(0, 0, 14);
$headerBGColor: #1f1f1f;
$menuBorder: rgba(255,255,255,0.3);

// Default colors
$vueGreen: #42b983;

@mixin changeFont($font) {
  font-family: $font, sans-serif;
}

@mixin flex($justify, $align, $wrap, $dir, $r: false) {
  @if $r {
    display: flex;
  } @else {
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-flow: $wrap $dir;
  }
}

@mixin size($width, $height, $maxWidth: none, $maxHeight: none) {
  width: $width;
  height: $height;
}

.header__link-c {
  @include changeFont('Nunito');
  letter-spacing: 1px;
}

#header {
  background-color: $headerBGColor;
  width: 100%;
  height: 50px;
  color: white;

  position: fixed;
  z-index: 2;
  @include flex(space-between, center, nowrap, row);
}

.header__menu-section {
  margin-left: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }
}

.header__menu {
  position: absolute;
  top:0;
  left:0;
  background-color: black;
  transition: all 2s;

  min-width: 300px;
  @include size(100%, 100vh);

  a {
    color: white;
    text-decoration: none;
  }
}

.header__menu-header {
  border-bottom: 1px solid $menuBorder;

  @include flex(space-between, center, wrap, row)
}

.header__content--menu {
  padding: 1rem 3rem;
}

.header__ul--menu {
  list-style: none;
  text-align: left;
}

.header__link-c--menu {
  color: $menuBorder;
  border-bottom: 1px solid $menuBorder;
  padding: 1rem 0;
}



.header__menu-header {
  svg {
    color: white;
    font-size: 1.5rem;
    margin: 1rem;
    
    &:hover {
      cursor: pointer;
    }
  }
}

.header__logo-container {
  text-transform: uppercase;
  padding: 0.2rem 1rem;
  @include changeFont('Montserrat');

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
  }
}


.header__content--header {
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  margin: auto;

  display: none;
}

.header__ul--header {
  list-style: none;
  // text-align: center;

  li {
    padding: 1rem;
    a {
      // color: $darkBlue;
      // padding: 0.4em 0.1rem;
      text-decoration: none;
      transition-duration: 0.5s;
      color: #fff;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}





// Screen-sizes 550px and above
@media screen and (min-width: 550px) {

  .header__menu-section {
    svg {
      font-size: 1.3rem;
    }
  }

  .header__link-c--menu {
    font-size: 1.2rem;
    padding: 1.2rem 0;
  }

  .header__logo-container {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-size: 1.3rem;
    }
  }

  .header__content--header {
    margin: 0 1rem 0 0;
    
  }

  .header__ul--header {
    list-style: none;
    display: flex;
    justify-content: space-around;
    max-width: initial;
    width: 100%;

    li {
      padding: 1.7rem 0.6rem;

      a {
        padding: 0.3em 0.2rem;
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

@media screen and (min-width: 800px) {
  #header {
    height: 62px;
  }

  .header__logo-container {
    margin-left: 0.3rem;
  }

  .header__menu-section, .header__menu {
    display: none;
  }

  .header__content--header {
    display: block;
  }
  
}

// Screen-sizes 1000px and above
@media screen and (min-width: 1000px) {

  .header__link-c--header {
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
