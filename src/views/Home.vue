<template>
  <div id="home">
    <section class="home__intro">
      <h1 class="home__title">What does it mean to be an American?</h1>
      <h4 class="home__period">Period 3</h4>
      <p class="home__name">Preston Fan</p>
    </section>
    <main>
      Lorem ipsum dolor, lorem100
      sit amet consectetur adipisicing elit. Et sunt debitis alias numquam fugit vel, placeat non asperiores consectetur amet. Ipsum perferendis enim hic, nisi pariatur repellat saepe tenetur eaque? Accusamus, numquam. Numquam quaerat odio, dolorem vel officia assumenda illum, aspernatur repellendus vitae nemo molestiae, maiores neque fugiat repellat mollitia voluptatem quae iusto a cupiditate provident nesciunt et? Id illum nostrum neque architecto, dolores fugiat hic aliquam sint nihil harum quas qui labore tempore animi quod soluta vitae magnam sit sed eius deserunt voluptatibus ipsum voluptatum laborum? Possimus harum rem iusto quas labore corporis ea culpa minima nostrum iste voluptates nisi vero fugit facere provident sapiente nam aliquid, doloremque iure ipsum. Recusandae voluptas qui cum doloremque repellendus, amet obcaecati aliquid animi quasi voluptates, vitae quam nihil aspernatur dolorum, fugit aperiam. Illo cum aliquid, officiis ad eligendi vero sunt alias molestiae voluptatum, nam architecto maiores nemo suscipit harum ipsum odio deserunt magnam nulla eum labore. Error placeat similique modi odio nihil tempora sit, facere, cumque dolor explicabo incidunt minima mollitia! Dolores ipsa rerum, minus vel voluptate doloribus laudantium delectus? Quidem facere itaque iste libero id quod aspernatur similique? Autem cupiditate similique repudiandae accusantium amet delectus veritatis aut, placeat facilis iure totam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quia natus accusantium veniam fugit soluta quo officiis minus. Dolore doloremque perferendis eos voluptatum ipsum illum sed sint. Fugit ullam, et officia explicabo veniam laboriosam tempora accusantium ex atque aliquam exercitationem voluptates, nam ratione facere nihil! Animi, architecto nam laboriosam distinctio corrupti sequi necessitatibus est. Esse debitis enim temporibus doloribus nihil harum quam voluptate eos dicta, blanditiis obcaecati cumque exercitationem, qui error quis explicabo ea aliquid voluptas sint minima reprehenderit numquam! Earum, ratione? Architecto sapiente, id ullam voluptates repudiandae dolor cum repellendus voluptate similique amet minima pariatur atque quis totam.
    </main>
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
@mixin displayFlex($justify, $align, $w, $dir) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-flow: $w $dir;
}

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

#home {
  width: 100%;
}

.home__intro {
  width: 100%;
  padding: 1rem;

  height: 500px;
  @include displayFlex(center, center, nowrap, column);
  position: relative;
}

.home__intro:before {
  content: '';
  position: absolute;
  top:0;
  left:0;
  max-width: 100%;  
  width: 100%;
  height: 100%;
  z-index: -1;

  background-image: url('../assets/home-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}


.home__title {
  text-transform: uppercase;
}

</style>