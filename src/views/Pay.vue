<template>
    <main id="pay">
        <section class="content" v-if="event">
        <p>You are about to score some sweet tickets to</p>
        <h1>{{ event.name }}</h1>
        <p class="when">{{ event.when.date }} {{ event.when.from }} - {{ event.when.to }}</p>
        <p class="where">@ Globen</p>
        <section class="counter">
          <article class="price">{{ event.price * amount }}</article>
          <article class="decrese" @click=" amount-- ">
            <img src="../assets/decrese.svg" alt="decrese">
          </article>
          <article class="num-tickets">{{ amount }}</article>
          <article class="increse" @click=" amount++ ">
            <img src="../assets/increse.svg" alt="increse">
          </article>
        </section>
        <a href="#" class="btn" @click="buy">Take my money!</a>
        </section>
        <pager :activeStep="activeStep"/>
    </main>
</template>

<script>
import pager from '@/components/Pager';

export default {
  name: 'pay',
  data(){
    return {
      activeStep: 2,
      amount: 1
    }
  },
  components: {
    pager
  },
  computed: {
    event(){
      return this.$store.state.event;
    }
  },
  methods: {
    buy(){

      this.$store.dispatch('buy', { event: this.event._id, amount: this.amount });

      this.$router.push('/tickets');
    
    }
  }
}
</script>
<style lang="scss">
@import '../scss/variables';

#pay {
  background: $darkblue;
  display: flex;
  flex-direction: column;

  .content {
    flex: 7;
    @extend %center;
    flex-direction: column;

    a {
      &.btn {
        max-width: 80vw;
        width: 100%;
        border-radius: 3px;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        background: $green;
        height: 4rem;
        @extend %center;
      }
    }


    p {
      color: rgba($color: #fff, $alpha: .7);
      font-size: 1.2rem;
      font-style: italic;
      padding: 2rem 3rem;
      text-align: center;
    }

    h1 {
      color: $pink;
      font-size: 2.4rem;
      margin: 0;
      text-shadow: 1px 1px 0 rgba($color: #fff, $alpha: .1); 
    }

    .when {
      font-size: 1.2rem;
      font-weight: 700;
      color: $green;
      text-align: center;
      margin: 0;
      padding: .25rem 0;
    }

    .where {
      font-size: 1.2rem;
      color: rgba($color: #fff, $alpha: .6);
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .counter {
      max-width: 14rem;
      width: 100%;
      margin: 2rem 0;
      border: .125rem solid $pink;
      border-radius: 4px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 4rem;
      font-size: 1.6rem;
      color: white;

      .price {
        grid-column: 1/4;
        @extend %center;
        border-bottom: 1px solid $pink;
      }

      .increse {
        @extend %center;
      }

      .decrese {
        @extend %center;
      }

      .num-tickets {
        @extend %center;
        font-weight: 700;
        font-size: 1.8rem;
      }

    }

  }
}

</style>
