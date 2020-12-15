<template>
  <div id="home">
    <section class="home__intro">
      <main class="home__intro-content">
        <div class="home__intro-black-layer"></div>

        <div class="home__intro-extra-info">
          <p class="home__period">Period 3</p>
          <p class="home__name">Preston Fan</p>
        </div>
        <h1 class="home__intro-title">What does it mean to be an American?</h1>
      </main>
      <NavigationArrow></NavigationArrow>
    </section>

    <section id="content-section" style="height: 2rem; background-color: black;"></section>
    <main class="home__main">
      <div class="home__main-container">

        <!-- 3rd Question !-->
        <section class="home__main-question-container home__main-question-container--third">
          <div class="home__main-question-image home__main-question-image--third">
            <img class="home__main-question-image home__main-question-image--third" src="../assets/home-question-three-image.jpg" />
          </div>
          <div class="home__main-question-text home__main-question-text--third">
            <div class="home__main-question home__main-question--third">
              <h3 class="home__question-q home__question-q--third">Think about the answers that you heard from your interview subject, your historical figure, and yourself. Think about the similarities and differences you hear in each response. Do you see any historical patterns? </h3>
            </div>
            <div class="home__main-response home__main-response--third">
              <p class="home__question-r home__question-r--third">
                I noticed that immigrants typically came here with very little resources and money. According to Nikola Tesla's biography, he had a little over a couple of cents
                when he arrived to America while my interviewee Kim Wong could hardly afford anything back in China. Also, during History class there were many accounts
                of immigrants who came here broke. This symbolizes the many negative push factors immigrants had to experience back in their country which were probably put largely into consideration when 
                deciding whether or not they would immigrate to America. 
              </p>
            </div>
          </div>
        </section>

        <!-- MAIN QUESTION !-->
        <section class="home__main-question-container home__main-question-container--main">
          <!-- <div class="home__main-question-image home__main-question-image--fourth">
            <img class="home__main-question-image home__main-question-image--fourth" src="../assets/home-question-three-image.jpg" />
          </div> -->
          <div class="home__main-question-text home__main-question-text--main">
            <div class="home__main-question home__main-question--main">
              <h3 class="home__question-q home__question-q--main">MAIN QUESTION: What does it mean to be an American?</h3>
            </div>
            <div class="home__main-response home__main-response--main">
              <div class="home__question-r home__question-r--main">
                <p class="home__question-r--thesis">To classify yourself as an American is to consider yourself as one and to contribute to American society.</p>
                <p class="home__question-r--evidence">Nikola Tesla is an extreme case as an American. According to his biography, he immigrated to New York City in 1884
                  so that he could get hired by Thomas Edison. This establishes his identity as an American because he is willing to contribute to science and work with a famous inventor
                  to greatly impact society. Moreover, in 1891, he received his American citizenship. This is what I meant by "considering yourself as one" because he went out of his way
                  to receive an American citizenship many years after immigrating there. I also believe that he was classfied as an American before getting his citizenship. Finally, his 
                  inventions such as the AC electrical system and the Tesla coil contribute to today's society in America, definitely classifying him as an American.
                </p>
                <p class="home__question-r--evidence">
                  In the case of Kim Wong, he said that he doesn't want to vote if it doesn't matter to him because it would change the vote. I believe this is a good
                  representation in being an American because to be an American is to contribute to American society. In this case, he is contributing to society by only
                  voting when he actually has an opinion during the presidential election. I believe that a person shouldn't vote if the current presidential election
                  isn't important to them. Also, during the interview he mentioned something about having a Facebook account and occassionally watching the news. 
                  I believe that involving yourself in American culture such as American media is a good representation at being an American and contributes to society
                  because it supports these companies economically. Finally, I believe that a big part of classifying yourself as an American is to learn English. Kim Wong is 
                  a good example of this because he actually went to college for English. Many nationalaties have their own distinct language and I believe that speaking 
                  English is a big part of classifying yourself as an American.
                </p>
                <p class="home__question-r--evidence">
                  Contributing to society means following the rules and laws. In my case, I believed people should abide by and acknowledge the Constitution. Abiding
                   by and acknowledging the Constitution contributes to society because it involuntarily leads to less unrest and 
                   disagreements. Also, if just, one should follow the very foundation of the country they live in. Democracy symbolizes America and is a huge pull factor 
                   for immigrants. To accept oneself as an American means to follow a government type that represents America. Racial and Gender Equality are very important attributes
                   of America which make America distinct. I believe these two traits are a huge part of America and any American should abide by these traits in order
                   to accept themselves as an American. 
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationArrow from '../components/NavigationArrow.vue';
@Component({
  components: {
    NavigationArrow
  },
})
export default class Home extends Vue {
}
</script>



<style lang="scss">
// Padauk for Home Title
@import url('https://fonts.googleapis.com/css2?family=Padauk&display=swap');

// Roboto Mono
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

// Montserrat - question
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

// Open Sans - response
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');


$title: #1f1f1f;


* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

#home {
  scroll-behavior: smooth; 
  padding-top: 50px;

  @include responsive('mediumScr') {
    padding-top: 62px;
  }
}

.home__intro {
  @include size(100%, calc(100vh - 50px));
  min-height: 400px;
  min-width: 300px;

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
  z-index: -3;
  opacity: 0.9;
  // box-shadow: 0 0 70px 20px black inset;

  background-image: url('../assets/home-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
}

.home__intro-content {
  text-align: center;
  // background: red;
  max-width: 600px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: white;

  @include responsive('smallScr') {
    // text-align: center;
    margin-bottom: 3rem;
  }
  
  @include responsive('mediumScr') {
    // text-align: right;
    margin-bottom: 4rem;
  }

  @include responsive('mediumTwoScr') {
    max-width: 1000px;
    margin-bottom: 5rem;
  }
}

.home__intro-black-layer {
  position: absolute;
  top:0;
  left:0;
  
  @include size(100%, 100%);
  background: rgba(0,0,0,0.8);
  z-index: -2;
}

.home__intro-title {
  text-transform: uppercase;
  font-size: 3rem;

  @include changeFont('Padauk');
  @include responsive('smallScr') {
    font-size: 3.5rem;
  }

  @include responsive('mediumScr') {
    font-size: 4rem;
  }

  @include responsive('largeScr') {
    font-size: 5rem;
  }
}

.home__intro-extra-info {
  padding: 1rem;

  @include displayFlex(center, center, wrap, column);
}

.home__period {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: rgb(199, 199, 199);
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
  padding-bottom: 1rem;
  border-bottom: 2px solid white;
}





// Main Content - HOME PAGE

.home__main-container {
  min-width: 300px;
  margin: 0 auto;
  background: black;
  padding: 1rem;

  @include responsive('smallScr') {
    padding: 2rem;
  }

  @include responsive('mediumScr') {
    padding: 3rem;
  }
}

.home__main-question-container {
  @include displayFlex(space-around, center, wrap, column);

  @include responsive('mediumTwoScr') {
    @include displayFlex(center, center, wrap, row);
  }
}


.home__main-question-container--third {
  border-bottom: 5px solid white;
  margin: 2rem;
  padding: 2rem;
  // border-top: 5px solid $title;

}

.home__main-question--third:last-child {  
  margin-bottom: 2rem;
}

.home__main-question-image {
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;

  @include responsive('mediumScr') {
    flex: 6;
  }

  @include responsive('mediumTwoScr') {
    margin-bottom: 0;
  }
}

.home__main-question-text {
  @include responsive('mediumScr') {
    flex: 4;
    padding: 2rem;
  }
}

.home__main-question {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: darkgray;
  @include changeFont('Montserrat');
  @include responsive('smallScr') {
    font-size: 1.1rem;
  }

  @include responsive('mediumScr') {
    font-size: 1.2rem;
  }

  @include responsive('largeScr') {
    font-size: 1.4rem;
  }
}

.home__main-question-container {
  text-align: left;
}

.home__main-response {
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: white;
  letter-spacing: 1.2px;
  @include changeFont('Open Sans');
}


.home__question-r--thesis {
  font-weight: 800;
  margin-bottom: 2rem;
}

.home__question-r--evidence {
  color: white;
  margin-bottom: 1rem;
}
</style>