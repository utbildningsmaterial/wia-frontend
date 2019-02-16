<template>
  <main id="verify">
      <header>
          <h1>Verify code</h1>
      </header>
    <section class="content">

  </section>
  </main>
</template>

<script>
export default {
  name: 'verify',
  data(){
    return {
    }
  }
}
</script>
<style lang="scss">
@import '../scss/variables';

#verify {
  background: $orange !important;
  display: flex;
  flex-direction: column;

  header {
      flex: 3;
      @extend %center;
      color: $darkblue;
  }

  .content {
    flex: 10;
    @extend %center;
    flex-direction: column;
  }
}

</style>
