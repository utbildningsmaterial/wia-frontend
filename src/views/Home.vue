<template>
  <main id="home">
    <section class="content">
      <img src="../assets/logo.svg" alt="Where its @" @click="$router.push('/events')">
      <h1>Where it´s @</h1>
  </section>
  <pager :activeStep="activeStep"/>
  </main>
</template>

<script>
import pager from '@/components/Pager';

export default {
  name: 'home',
  data(){
    return {
      activeStep: 1
    }
  },
  components: {
    pager
  }
}
</script>
<style lang="scss">
@import '../scss/variables';

#home {
  background: $darkblue;
  display: flex;
  flex-direction: column;

  .content {
    flex: 10;
    @extend %center;
    flex-direction: column;

    h1 {
      color: $pink;
      font-size: 2.2rem;
      margin: .5rem 0;
    }
  }
}

</style>
