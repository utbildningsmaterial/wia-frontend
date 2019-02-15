<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  beforeMount(){
    this.$store.dispatch('getEvents');
  }
}
</script>

<style lang="scss">
  @import 'scss/main';

</style>
