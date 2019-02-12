<template>
    <main id="events">
        <header>
            <h1>Events</h1>
            <input type="text" name="search" v-model="filter" placeholder="filter">
        </header>
        <section class="content">
        <event v-for="event in events" :key="event.id" :event="event" />
        </section>
        <pager :activeStep="activeStep"/>
    </main>
</template>

<script>
import event from '@/components/Event';
import pager from '@/components/Pager';

export default {
  name: 'events',
  data(){
    return {
      activeStep: 2,
      filter: null
    }
  },
  components: {
    pager,
    event
  },
  computed: {
    events(){
      return this.$store.state.events;
    }
  }
}
</script>
<style lang="scss">
@import '../scss/variables';

#events {
  background: $darkblue;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;

    header {
        @extend %center;
        flex-direction: column;

        input {
          width: 100%;
          border: none;
          background: rgba($color: #fff, $alpha: .1);
          padding: .5rem;
          height: 2.5rem;
          margin: 1rem 0 2rem 0;
          border-radius: 4px;
          font-size: 1.2rem;
          color: rgba($color: #fff, $alpha: .8);
          font-family: 'Fira Sans', sans-serif;
          box-sizing: border-box;

          &:focus {
            outline: none;
          }

        }

        h1 {
            color: $pink;
            font-size: 2.2rem;
            margin: .5rem 0;
        }
    }

  .content {
    flex: 7;
  }
}

</style>
