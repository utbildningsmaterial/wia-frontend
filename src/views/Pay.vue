<template>
    <main id="pay">
        <header>
            <h1>Events</h1>
        </header>
        <section class="content">
        
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
      activeStep: 2
    }
  },
  components: {
    pager
  },
  computed: {
    ticket(){
      return this.$store.state.event;
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

    header {
        flex: 3;
        
        h1 {
            color: $pink;
            font-size: 2.2rem;
            margin: .5rem 0;
        }
    }

  .content {
    flex: 7;
    @extend %center;
    flex-direction: column;
  }
}

</style>
