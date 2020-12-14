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

    <!--Menu Toggle !-->
    <section class="header__menu-section">
      <font-awesome-icon icon="bars" @click="toggleMenu"/>
    </section>


    <!-- Menu -->
    <section class="header__menu" :class="[{active: this.menuActivated}]" v-show="menuActivated">
      <!-- Menu Header !-->
      <div class="header__menu-header">
        <font-awesome-icon icon="times" @click="toggleMenu"/>
        <section class="header__logo-container header__logo-container--menu">
          <router-link class="header__logo header__logo--menu" to="/" exact>
            S1 History Final
          </router-link>
        </section>
      </div>
      <!-- Menu Content !-->
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

    <!-- Header Logo Container !-->
    <section class="header__logo-container">
      <router-link class="header__logo" to="/" exact>
        S1 History Final
      </router-link>
    </section>

    <!-- Header Content !-->
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

// @import '../partials/'

// @mixin changeFont($font) {
//   font-family: $font, sans-serif;
// }

// @mixin flex($justify, $align, $wrap, $dir, $r: false) {
//   @if $r {
//     display: flex;
//   } @else {
//     display: flex;
//     justify-content: $justify;
//     align-items: $align;
//     flex-flow: $wrap $dir;
//   }
// }

// @mixin size($width, $height, $maxWidth: none, $maxHeight: none) {
//   width: $width;
//   height: $height;
// }




.header__link-c {
  letter-spacing: 1px;
  @include changeFont('Nunito');
}

#header {
  background-color: transparent;
  background-color: $headerBGColor;
  width: 100%;
  min-width: 300px;
  height: 50px;
  color: white;
  position: fixed;
  z-index: 2;
  @include displayFlex(space-between, center, nowrap, row);

  // Responsive 800px
  @include responsive('mediumScr') {
    height: 62px;
  }
}

// Menu Toggle
.header__menu-section {
  margin-left: 1rem;

  // Responsive 800px
  @include responsive('mediumScr') {
    display: none;
  }

  svg {
    font-size: 1.2rem;

    // Responsive 550px
    @include responsive('smallScr') {
      font-size: 1.3rem;
    }
  }

  &:hover {
    cursor: pointer;
  }
}

// Menu
.header__menu {
  position: absolute;
  top:0;
  left:0;
  background-color: black;
  transition: all 2s;

  min-width: 300px;
  @include size(100%, 100vh);

  // Responsive 800px
  @include responsive('mediumScr') {
    display: none;
  }

  a {
    color: white;
    text-decoration: none;
  }
}

// Menu Header
.header__menu-header {
  border-bottom: 1px solid $menuBorder;

  svg {
    color: white;
    font-size: 1.5rem;
    margin: 1rem;
    
    &:hover {
      cursor: pointer;
    }
  }

  @include displayFlex(space-between, center, wrap, row)
}

// Menu Content
.header__content--menu {
  padding: 1rem 3rem;
}

// Menu Ul
.header__ul--menu {
  list-style: none;
  text-align: left;
}

// Menu li element
.header__link-c--menu {
  color: $menuBorder;
  border-bottom: 1px solid $menuBorder;
  padding: 1rem 0;

  // Responsive 550px
  @include responsive($smallScr) {
    font-size: 1.2rem;
    padding: 1.2rem 0;
  }
}

// Menu Logo Container
.header__logo-container {
  text-transform: uppercase;
  padding: 0.2rem 1rem;
  @include changeFont('Montserrat');

  // Responsive 550px
  @include responsive('smallScr') {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Responsive 800px
  @include responsive('mediumScr') {
    margin-left: 0.3rem;
  }


  // Responsive 1200px;
  @include responsive('largeScr') {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #fff;

    // Responsive 550px
    @include responsive('smallScr') {
      font-size: 1.3rem;
    }
  }
}

// Header Navigation Links
.header__content--header {
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  margin: auto;

  display: none;

  // Responsive 550px
  @include responsive('smallScr') {
    margin: 0 1rem 0 0;
  }

  // Responsive 800px
  @include responsive('mediumScr') {
    display: block;
  }
}

// Header Ul
.header__ul--header {
  list-style: none;
  // text-align: center;

  // Responsive 550px
  @include responsive ('smallScr') {
    list-style: none;
    display: flex;
    justify-content: space-around;
    max-width: initial;
    width: 100%;
  }

  li {
    padding: 1rem;

    // Responsive 550px
    @include responsive('smallScr') {
      padding: 1.7rem 0.6rem;
    }

    a {
      // color: $darkBlue;
      // padding: 0.4em 0.1rem;
      text-decoration: none;
      transition-duration: 0.5s;
      color: #fff;


      // Responsive 550px
      @include responsive('smallScr') {
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

      // Responsive 1000px
      @include responsive('mediumTwoScr') {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
