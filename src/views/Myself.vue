<template>
  <div id="myself">
    <main class="myself__content-container">

        <div class="myself__content">

          <h4 class="myself__question">What does it mean to be an American?</h4>
          <p class="myself__response myself__response--bold">
            To be an American is to conform to and embrace CURRENT values of
            American culture.
          </p>
          <p class="myself__response">
            Being an American doesn't just mean that you live in America and you
            have a citizenship. I also believe that Americans don't have to
            embrace and conform to EVERY American value, however they should abide
            by most if they want to consider themselves American. The following
            will be examples of "values of American culture".
          </p>

          <p></p>
          <p class="myself__response">
            First of all, gender plays a pretty big role in this because
            traditionally the ubiquitous belief was that men work while women work
            in the household. However, as the years passed by, these gender roles
            gradually dissipated as the widespread belief nowadays is that both
            men and women can work. Embracing this current belief of gender
            equality is a big part in being an American.
          </p>
          <p class="myself__response">
            Similarily, the white race was traditionally seen as superior compared
            to any other race. Even certain races were denied the option to
            immigrate here. However, nowadays the current belief is that all
            widespread belief is that all races are equal. Therefore, as an
            American, one should embrace this idea of racial equality.
          </p>
          <p class="myself__response">
            Furthermore, I believe that people should abide by and follow the
            Constitution along with America's political system: Democracy. This is
            because the Constitution and Democracy are the main reasons why
            America stands today as a functional and well respected country.
            Therefore, to be an American is to conform to a great number of
            American values that represent the country as a whole.
          </p>
        </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Myself extends Vue {}
</script>

<style lang="scss">
$title: #1f1f1f;

#myself {
  padding-top: 50px;
  text-align: left;

  @include responsive("mediumScr") {
    padding-top: 62px;
  }
}

.myself__content-container {
  padding: 2rem 1rem;
  background-image: url('../assets/washington-dc.jpg');
  background-size: cover;
  background-position: center;
}

// .myself-black-layer {
//   position: absolute;
//   top:0;
//   left:0;
//   background-color: rgba(0,0,0,0.2);
//   // @include size(inherit, 100%);
// }

.myself__content{
  width: 90%;
  max-width: 900px;
  background-color: rgba(255, 255, 255, 0.753);
  margin: auto;
  border-radius: 10px;
  //   height: calc(100vh - 50px);

  //   @include responsive("mediumScr") {
  //     height: calc(100vh - 62px);
  //   }
}

.myself__content {
  max-width: 850px;
  height: 100%;
  margin: auto;
  padding: 1.2rem;

  @include displayFlex(space-around, flex-start, wrap, column);

  @include responsive('smallScr') {
      padding: 1.6rem;
  }

  @include responsive("mediumScr") {
    padding: 2.8rem;
  }

  @include responsive('mediumTwoScr') {
      padding: 3.3rem;
  }

  @include responsive("largeScr") {
    padding: 4rem;
  }
}

.myself__response--bold {
  font-weight: bold;
}

.myself__question {
  color: $title;
  font-size: 2rem;
}

.myself__response {
  font-size: 1.1rem;
  margin-top: 2.4rem;

  @include responsive("smallScr") {
    font-size: 1.3rem;
    line-height: 2rem;
  }
}
</style>