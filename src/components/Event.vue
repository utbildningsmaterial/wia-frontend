<template>
    <article class="event" @click="selectEvent(event)" >
        <aside class="date">{{ event.when.date }}</aside>
        <section class="info">
            <h2>{{ event.name }}</h2>
            <p class="where">{{ event.where.venue }}</p>
            <footer>
                <section class="time">{{ event.when.from }} - {{ event.when.to }}</section>
                <section class="price"> {{ event.price }} sek</section>
            </footer>           
        </section>

    </article>
</template>

<script>
export default {
    name: 'event',
    props: ['event'],
    methods: {
        selectEvent(event){
            this.$store.commit('selectEvent', event);
            this.$router.push('/pay');
        }
    }
}

</script>

<style lang="scss">
@import '../scss/variables';

.event {
    display: flex;
    width: 100%;
    margin-bottom: 1.5rem;

    .date {
        width: 4.4rem;
        height: 4.4rem;
        margin-right: 1rem;
        border: .125rem solid white;
        border-radius: 4px;
        color: white;
        font-weight: 700;
        @extend %center;
    }

    .info {
        flex: 2;

        h2 {
            margin: -0rem 0 0 0;
            padding: 0;
            font-size: 1.4rem;
            line-height: 1.2rem;
            color: white;
            text-shadow: 1px 1px 0 $pink;
        }

        .where {
            margin: 0;
            padding: .25rem 0;
            color: rgba(255, 255, 255, .6);
            font-size: .9rem;
            font-style: italic;
        }

        footer {
            display: flex;
            border-bottom: 1px solid rgba(255, 255, 255, .2);

            .time {
            flex: 1;
            padding: 0 0 .25rem 0;
            color: rgba(255, 255, 255, .8);
            font-weight: 600;
            }
   
            .price {
                flex: 1;
                color: $green;
                font-weight: 700;
                font-size: 1.2rem;
                text-align: right;
            }
        }
    }
}
</style>
