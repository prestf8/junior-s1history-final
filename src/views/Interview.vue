<template>
    <div id="interview">
        <section class="interview__intro">
            <div class="interview__intro-content">
                <h3 class="interview__intro-title">Interview</h3>
                <h6 class="interview__intro-subtitle">w/ Kim Wong</h6>
            </div>
            <!-- <NavigationArrow></NavigationArrow> -->
        </section>
        <!-- <section id="content-section" style="height: 2rem"></section> -->
        <main class="interview__content-container">
            <div class="interview__content">
                <section class="interview__content-title">
                    <h3 class="interview__title">Kim Wong</h3>
                    <img class="interview__interviewee" src="../assets/interviewee.png" />
                </section>
                <section class="interview__content-main">
                    <ul class="interview__content-ul">
                        <li class="interview__content-li" v-for="question in questions" :key="question.number">
                            <p class="interview__question">{{question.q}}</p>
                            <p class="interview__purpose">{{question.purpose}}</p>
                            <p class="interview__response"><b>Response: </b>{{question.response}}</p>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'

import NavigationArrow from '../components/NavigationArrow.vue'

@Component({
    components: {
        NavigationArrow
    }
})
export default class Interview extends Vue {

    private questions = [
        {
            q: "Are you an immigrant or were you born an American?",
            purpose: "I’m asking this question because I believe this a good starter question for the interview. Whether or not the interviewee is an immigrant would probably result in different answers for the consequent questions. ",
            response: "He came from Guangzhou, China at around age 20. ",
        },
        {
            q: "Why did you immigrate here? (Added because he was an immigrant)",
            purpose: "The purpose of this question is to see the perspective of an immigrant who actually WANTED to go to America. Was it the push factors or possibly the pull factors?",
            response:"His home was very dirty and didn't even have seats for toilets. His house was too small and he didn't have much freedom in China. Another reason was that he couldn't go to college in China but could go to college in America. ",
        },
        {
            q: "How do you regularly involve yourself in American culture",
            purpose: "The purpose of this question is so I could see how and how often the interviewee embraces American culture.  If the interviewee is an immigrant, then I could see if he attempts to incorporate American culture into his culture. ",
            response: "He says he has a Facebook account and occasionally watches the news. But most of the time he watches Chinese platforms. He also said he tried really hard to learn English in college. ",
        },
        {
            q: "Did you involve yourself in the recent presidential election by voting?",
            purpose: "Pretty much a consequent followup question to see if the immigrant partakes in a relatively big part of the United States. This also could be good evidence for the question if he says yes.",
            response: "He said he did vote but he didn't really vote before.(I didn't ask for who)",
        },
        {
            q: "Why did you decide to vote this time? Do you usually care about the presidential elections? Explain why",
            purpose: "This is a followup question I came up with right after because I thought it was interesting that he decided to vote now. This is to see what got him to vote this time and why he didn't last time.",
            response: "He said he doesn't want to vote if it doesn't matter to him but only votes when it does such as this one."
        },
        {
            q: "What do you believe of the freedom here? Is it too much or too little freedom compared to other countries?",
            purpose: "America is pretty different because the first amendment allows citizens to have lots of freedom. The purpose of this question is to get the perception of another American to see if he believes that America’s first amendment is too overpowering or too weak.",
            response: "He hardly had any freedom in China and one of the reasons he went to America was because of freedom. He really enjoys the freedom here.",
        }, 
        // {
        //     q: "Do you believe America is a prosperous (rich) country?",
        //     purpose: "America being a prosperous countryx    S is one of the reasons why people enjoy living here. Also, it is a major pull factor which many immigrants look forward to. Therefore, the purpose of this question is to see if America’s prosperity is a significant factor for staying in America. ",
        //     response: "He says he believes America is a very rich country compared to when he was living in China. It was obvious that there was a difference in wealth.",
        // },
        {
            q: "What languages do you speak in your household?",
            purpose: "For immigrants, the purpose of this question is to see whether they use their mother tongue or attempted to incorporate English into their ways of communication as an American. For people who were born here, the purpose of this question is to see whether they made the choice to speak English (which they should probably know) or decide to learn and speak a language which was more comfortable with their family / more related to their culture. ",
            response: "He mainly only speaks Cantonese but sometimes incorporates English when talking. ",
        },
        {
            q: "What do you think of America’s type of government?",
            purpose: "The type of government of any country is a good representation and factor of that country. Therefore, the purpose of this question is to really understand the perspective of an American on democracy. Depending on the interviewee’s perspective, we can see how impactful America’s government really is to him. Embracing the type of government in America is probably one of the possible answers for “What does it mean to be an American?”",
            response: "He really likes the type of government in America compared to China's government because it gives him a lot more freedom and rights.",
        },
        {
            q: "Do you believe that American citizens make a lot of decisions for themselves / are independent?",
            purpose: "Independence is actually a huge pull factor in America and probably one of the most desired values of a country. Therefore, the purpose of this question is to see whether or not independence is significant enough to the interviewee in which he believes that American citizens are truly independent. If not, then I would know that independence isn’t one of the reasons why the interviewee likes America.",
            response: "He says that American people make more decisions and have more freedom than the people of China. He said he could do a lot more here than when he was in China.",
        },
        {
            q: "Finally, What do you think it means to classify yourself as an American?",
            purpose: "This question is going to be asked to get an idea on what the interviewee thinks about the main question.",
            response: "He thinks that you should be an American when you don't travel illegally and get a citizenship."
        }
    ]
}


</script>

<style lang="scss">

// Source Sans Pro
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

// Montserrat - title
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


// Montserrat - question
// @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

// Open Sans - response
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

$title: #1f1f1f;
$light: #55636F;
$main-content-bg: rgb(223, 223, 223);

* {
    margin:0;
    padding:0;
}

#interview {
    padding-top: 50px;

    @include responsive('mediumScr') {
        padding-top: 62px;
    }
}

.interview__intro {
    // background: yellow;
    position: relative;

    @include size(100%, calc(100vh - 50px));
    @include displayFlex(center, flex-end, nowrap, row);
    @include changeFont('Montserrat');
    @include responsive('mediumScr') {
        @include size(100%, calc(100vh - 62px));
        @include displayFlex(flex-end, flex-start, nowrap, row);
        padding: 5rem;
    }

    @include responsive('largeScr') {
        padding: 7rem;
    }

}

.interview__intro:before {
    max-width: 100%;
    background-image: url('../assets/interview-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    content: '';
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    @include size(100%, 100%);
}

.interview__intro-content {
    font-size: 3rem;
    // margin-bottom: 2rem;
    color: white;
    text-align: center;

    @include responsive('mediumScr') {
        color: $title;
        font-size: 4rem;
        text-align: right;
    }

    @include responsive('largeScr') {
        font-size: 5rem;
    }
}

.interview__intro-subtitle {
    font-size: 1rem;
    margin-bottom: 3rem;
    color: white;

    @include responsive('mediumScr') {
        color: $title;
        font-size: 2rem;
    }

    @include responsive('largeScr') {
        font-size: 3rem;
    }
}

.interview__content-container {
    // background-color: white;
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


.interview__content {
    // background-color: white;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0.7rem;

    @include responsive('smallScr') {
        padding: 2.2rem;
    }
}


.interview__content-title {
    @include displayFlex(space-around, center, wrap, row);
    color: white;
}

.interview__title {

    color: $title;
    @include changeFont('Source Sans Pro');
    font-size: 1.6rem;

    @include responsive('smallScr') {
        font-size: 2rem;
    }

    @include responsive('mediumScr') {
        font-size: 2.3rem;
        margin-bottom: 2rem;
    }

    @include responsive('mediumTwoScr') {
        font-size: 2.6rem;
    }

    @include responsive('largeScr') {
        font-size: 2.7rem;
    }
}

.interview__content-main {
    // background: red;
    margin-top: 2rem;
}

.interview__content-ul {
    list-style: none;
}

.interview__content-li {
    background-color: white;
    border-bottom: 5px solid $title;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: left;
    box-shadow: 10px 10px 50px 3px rgb(102, 102, 102);

    @include responsive('mediumScr') {
        padding: 2rem;
        margin-bottom: 4rem;
    }
}

.interview__question {
    @include changeFont('Montserrat');

    // color: rgb(22, 22, 22);
    font-weight: bold;
}

.interview__purpose {
    @include changeFont('Open Sans');

    margin-top: 1rem;
}

.interview__response {
    @include changeFont('Open Sans');
    margin-top: 2rem;
}


</style>