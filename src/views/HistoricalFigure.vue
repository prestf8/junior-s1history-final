<template>
  <div id="historical-figure">
    <section class="historical-figure__intro">
      <div class="historical-figure__black-layer"></div>
      <section class="historical-figure__content">
          <!-- <h2 class="historical-figure__title">Historical Figure:</h2> -->
          <h2 class="historical-figure__name">Nikola Tesla</h2>
          <p class="historical-figure__role">Serbian-American Inventor and Engineer</p>
      </section>
    </section>
    
    <main class="historical-figure__main-content-container">
      <section class="historical-figure__main-content">
        <h3 class="historical-figure__main-content-title">
          Facts
        </h3>
        <div class="historical-figure__main-content-points">
          <p class="historical-figure__point">- Born in Smiljian, Croatia on 1856</p>
          <p class="historical-figure__point">- After graduating at Polytechnic Institute in Austria, he spent the 
            next six years thinking about possible inventions and electromagnetic fields</p>
          <p class="historical-figure__point">- In 1884, Tesla moved to New York City with very little money and wealth</p>
          <p class="historical-figure__point">- Also arrived with a letter of introduction from Charles Bachelor to Thomas Edison</p>
          <p class="historical-figure__point">- Tesla then would get hired by Edison</p>
          <p class="historical-figure__point">- Designed the alternative-current (AC) electrical system which we still use today</p>
          <p class="historical-figure__point">- Edison would receive his American citizenship in 1891</p>
          <p class="historical-figure__point">- Earned many US patents and benefited America with many of his ideas and inventions</p>
          <p class="historical-figure__point">- Tesla's contributions have greatly accelerated American innovation in the early 1900s</p>
          <p class="historical-figure__point">- Discoveries by Tesla greatly impact America and even the world today</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class HistoricalFigure extends Vue {
  
  
}
</script>

<style lang="scss">

// Andika New Basic 
@import url('https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap');

// Source Sans Pro
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

// Poppins
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

$main-content-bg: rgb(21, 21, 21);
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}



#historical-figure {
  padding-top: 50px;

  @include responsive('mediumScr') {
    padding-top: 62px;
  }
}

.historical-figure__intro {
  text-align: left;
  position: relative;
  height: 100vh;
  color: white;
  // background: green;
  @include size(100%, calc(100vh - 50px));
  @include displayFlex(flex-start, flex-start, wrap, row);

  // Responsive 1000px
  @include responsive('mediumScr') {
    // @include displayFlex(flex-start, center, wrap, row);
    @include size(100%, calc(100vh - 62px));
  }

}

.historical-figure__intro:before {
  @include size(100%, 100%);
  content: '';
  position: absolute;
  top: 0;
  left:0;
  max-width: 100%;
  // margin-top: 50px;
  z-index: -2;

  background-image: url('../assets/historical-figure-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;

  @include responsive('mediumScr') {
    // margin-top: 62px;
    // top: 100px;
  }
}

.historical-figure__black-layer {
  position: absolute;
  top:0;
  left:0;
  z-index: -1;
  
  background-color: rgba(0,0,0,0.4);
  @include size(100%, 100%);
}

.historical-figure__content {
  margin-top: 5rem;
  @include displayFlex(center, center, nowrap, column);
  width: 100%;
  max-width: 500px;
  text-align: center;

  background: rgba(255,255,255,0.2);
  padding: 1rem;

  @include responsive('mediumScr') {
    max-width: 750px;
  }

  @include responsive('largeScr') {
    max-width: 850px;
  }
}
.historical-figure__name {
  font-size: 5rem;
  @include changeFont('Andika New Basic');

  @include responsive('mediumScr') {
    font-size: 5.5rem;
  }

  @include responsive('medium2ndScr') {
    font-size: 6rem;
  }

  @include responsive('largeScr') {
    font-size: 7rem;
  }
}

.historical-figure__role {

  display: none;
  @include changeFont('Source Sans Pro');

  @include responsive('mediumScr') {
    font-size: 1.2rem;
    display: block;
  }

  @include responsive('largeScr') {
    font-size: 1.4rem;
  }
}

.historical-figure__main-content-container {
  background: $main-content-bg;
  padding: 1rem 0.6rem;

  @include responsive('smallScr') {
    padding: 2rem 1rem;
    font-size: 1.1rem;
  }

  @include responsive('mediumScr') {
    padding: 2.2rem 1rem;
    font-size: 1.2rem;
  }

  @include responsive('mediumTwoScr') {
    padding: 3rem 1.2rem;
    font-size: 1.3rem;
  }

  @include responsive('largeScr') {
    padding: 4rem 1.5rem;
    font-size: 1.4rem;
  }
}

.historical-figure__main-content {
  background: white;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0.7rem;
  box-shadow: 5px 5px 100px 20px rgb(38, 36, 36);

  @include responsive('smallScr') {
    padding: 2.2rem;
  }
}

.historical-figure__main-content-title {  
  margin-bottom: 1rem;
  @include changeFont('Andika New Basic');
  font-size: 1.6rem;

  @include responsive('smallScr') {
    font-size: 2rem;
  }

  @include responsive('mediumScr') {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @include responsive('mediumTwoScr') {
    font-size: 2.6rem;
  }

  @include responsive('largeScr') {
    font-size: 3.2rem;
  }
}

.historical-figure__main-content-points {
    text-align: left;
    @include changeFont('Poppins');
}

.historical-figure__point {
  padding: 1rem;

  @include responsive('mediumScr') {
    padding: 1.4rem;
  }

  @include responsive('mediumTwoScr') {
    padding: 1.6rem;
  }

  @include responsive('largeScr') {
    padding: 1.8rem;
  }
}

</style>
