<template>
  <main id="verify">
      <header>
          <h1>Verify code</h1>
      </header>
    <section class="content">
        <section class="verification" v-if="verification">
            <h1 v-if="verification.verified">Valid</h1>
            <h1 v-if="!verification.verified">NOT valid</h1>
            {{ verification.msg }}
        </section>
        <section class="form">
            <input type="text" name="code" :value="code.toUpperCase()" @input="code = $event.target.value.toUpperCase()" :maxlength="codeLength" />
            <a href="#" class="verify" @click="verifyTicket">Verify code</a>
        </section>
  </section>
  </main>
</template>

<script>
export default {
  name: 'verify',
  data(){
    return {
        code: '',
        codeLength: 5
    }
  },
  computed: {
      verification(){
          return this.$store.state.verifyData;
      }
  },
  methods: {
      verifyTicket(){
          this.$store.dispatch('verifyTicket', this.code);
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    .verification {
        margin: auto;
        font-size: 1.2rem;
        font-style: italic;
        padding: 2rem;
        text-align: center;

        h1 {
            font-size: 1.6rem;
        }
    }

    .form {
        border: .125rem solid $darkblue;
        max-width: 16rem;
        width: 100%;
        margin: 2rem 0;
        border-radius: 4px;
        display: flex;
        flex-direction: column;

        input {
            height: 2rem;
            padding: .5rem;
            font-size: 1.4rem;
            letter-spacing: .25rem;
            text-align: center;
            appearance: none;
            border: none;
            background: none;

            &:focus {
                outline: none;
            }
        }

        .verify {
                height: 3rem;
                @extend %center;
                background: $darkblue;
                color: rgba($color: #fff, $alpha: .8);
                font-weight: 700;
                text-decoration: none;
        }
    }

  }
}

</style>
