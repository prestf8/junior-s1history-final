<template>
  <div id="home">
    <section class="home__intro">
      <main class="home__content">
        <div class="home__black-background"></div>
        <h1 class="home__title">What does it mean to be an American?</h1>

        <div class="home__extra-info">
          <p class="home__name">Preston Fan</p>
          <h4 class="home__period">Period 3</h4>
        </div>
      </main>
    </section>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
}
</script>



<style lang="scss">
// Padauk for Home Title
@import url('https://fonts.googleapis.com/css2?family=Padauk&display=swap');

// Mixins 
@mixin displayFlex($justify, $align, $w, $dir) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-flow: $w $dir;
}

@mixin size($width, $height, $maxWidth: none, $maxHeight: none) {
  width: $width;
  height: $height;
}

@mixin changeFont($font) {
  font-family: $font, sans-serif;
}

// Responsive
$smallScr: 550px;
$mediumScr: 800px;
$mediumTwoScr: 1000px;
$largeScr: 1600px;

@mixin responsive($type) {
  @if $type == 'smallScr' {
    @media only screen and (min-width: $smallScr) {
      @content;
    }
  } @else if $type == 'mediumScr' {
    @media only screen and (min-width: $mediumScr) {
      @content;
    }
  }
}


* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.home__intro {
  @include size(100%, calc(100vh - 50px));
  min-height: 400px;

  opacity: 0.9;
  padding: 1rem;
  position: relative;
  // color: white;
  @include displayFlex(center, center, nowrap, row);
  @include responsive('mediumScr') {
    @include size(100%, calc(100vh - 62px));
  }
}

.home__intro:before {
  @include size(100%, 100%);
  content: '';
  position: absolute;
  top:0;
  left:0;
  max-width: 100%;  
  z-index: -2;
  margin-top: 50px;
  // opacity: 0.9;
  // box-shadow: 0 0 70px 20px black inset;

  background-image: url('../assets/home-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;

  // Responsive 800px
  @include responsive('mediumScr') {
    margin-top: 62px;
    // @include size(100%, 100%);

  }
}

.home__content {
  text-align: left;
  // background: red;
  max-width: 600px;
  padding: 1rem;
  margin-bottom: 2rem;

  @include responsive('smallScr') {
    text-align: center;
  }
  
  @include responsive('mediumScr') {
    text-align: right;
  }

  @include responsive('mediumTwoScr') {
    max-width: 1000px;
  }
}


// Black background for more Shadow
.home__black-background {
  position: absolute;
  top:0;
  left:0;
  margin-top: 50px;

  background-color: rgba(0,0,0,0.3);
  z-index: -1;

  @include size(100%, 100%);

  // Responsive 800px;
  @include responsive('mediumScr') {
    margin-top: 62px;
  }
}

.home__title {
  text-transform: uppercase;
  margin-bottom: 3rem;
  font-size: 2.8rem;

  @include changeFont('Padauk');

  @include responsive('mediumScr') {
    font-size: 3rem;
  }

  @include responsive('largeScr') {
    font-size: 3.5rem;
  }
}

.home__period {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  @include changeFont('Padauk');

  @include responsive('smallScr') {
    font-size: 1.4rem;
  }

  @include responsive('largeScr') {
    font-size: 1.6rem;
  }
}

.home__name {
  font-size: 1.4rem;
  margin-bottom: 0.4rem;

  // @include responsive('smallScr') {
  //   margin-bottom: 0.rem;
  // }
}
</style>