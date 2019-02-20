<template>
    <main id="admin">
        <img src="../assets/logo.svg" alt="logo" class="logo">
        <section class="container">
            <section class="events">
            <table cellspacing="0">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Where</td>
                        <td>info</td>
                        <td>Available Tickets</td>
                        <td>Sold</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(event, index) in events" :key="index">
                        <td>{{ event.name }}</td>
                        <td>{{ event.where.venue }}</td>
                        <td>{{ event.info }}</td>
                        <td>{{ event.tickets.available }}</td>
                        <td>{{ event.tickets.sold }}</td>
                    </tr>
                </tbody>
            </table>
            </section>
            <div class="form">
                <input type="text" class="name" placeholder="name" v-model="newEvent.name" />
                <input type="text" class="venue" placeholder="venue" v-model="newEvent.where.venue" />
                <input type="text" class="address" placeholder="address" v-model="newEvent.where.adress" />
                <input type="text" class="date" placeholder="date" v-model="newEvent.when.date"/>
                <input type="text" class="time-start" placeholder="time start" v-model="newEvent.when.from" />
                <input type="text" class="time-end" placeholder="time end" v-model="newEvent.when.to"/>
                <input type="text" class="info" placeholder="info" v-model="newEvent.info"/>
                <input type="number" class="price" placeholder="price" v-model="newEvent.price" />
                <input type="number" class="tickets" placeholder="num of tickets" v-model="newEvent.tickets.available">
                <a href="#" class="btn" @click="createEvent"> Create event!</a>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'admin',
    beforeMount(){
        this.$store.dispatch('getEvents');
    },
    data(){
        return {
            newEvent: {      
                name: 'ABBA',
                where: {
                    venue: 'Trädgårn',
                    adress: 'Gbggatan 13'
                },
                when: {
                    date: '1 apr',
                    from: '19.00',
                    to: '21.00'
                },
                info: 'Ståplats',
                price: 699,
                tickets: {
                    available: 700,
                    sold: 0
                }
            }
        }
    },
    methods: {
        async createEvent(){

            //  createEvents
            this.$store.dispatch('createEvent', this.newEvent);

            // hämta events igen
            this.$store.dispatch('getEvents');

        }
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

$baseline: 2.6rem;

#admin {
    @extend %center;

    .logo {
        position: fixed;
        width: 4rem;
        left: 2rem;
        top:2rem;
    }

    .container {
        max-width: 1000px;
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 1rem;

        .events {
            background: rgba($color: #000, $alpha: .4);
            border-radius: 3px;
            padding: 1rem;

            table {
                width: 100%;
                
                thead {
                    color: $pink;
                    font-size: .8rem;
                    text-transform: uppercase;

                    td {
                        padding: .75rem;
                        border-bottom: 1px solid rgba($color: $pink, $alpha: .4);
                    }
                }

                tbody {
                    tr {
                        td {
                            font-size: .9rem;
                            padding: 1rem .75rem;
                            color: rgba($color: #FFF, $alpha: .8);
                        
                            &:first-child {
                                font-weight: 700;
                                color: white;
                            }
                        }
                    
                        &:nth-child(2n) {
                            background: rgba($color: #fff, $alpha: .025);
                        } 
                    }
                }
            }
        }

        .form {
            background: rgba($color: #000, $alpha: .4);
            border-radius: 3px;
            padding: 1rem;
            display: grid;
            grid-gap: .5rem;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: $baseline $baseline $baseline $baseline $baseline $baseline $baseline $baseline*0.25 $baseline*1.5; 
            grid-template-areas: 
            "name name"
            "venue venue"
            "address address"
            "date date"
            "start end"
            "info info"
            "price tickets"
            ". ."
            "btn btn";

            input {
                width: 100%;
                border: 1px solid rgba($color: #fff, $alpha: .6);
                background: none;
                box-sizing: border-box;
                padding: .5rem;
                outline: none;
                font-size: 1.2rem;
                color: white;
                border-radius: 3px;

                &:focus {
                    border: 1px solid rgba($color: #fff, $alpha: 1);
                }

                &.name       { grid-area: name; }
                &.venue      { grid-area: venue; }
                &.address    { grid-area: address; }
                &.date       { grid-area: date; }
                &.time-start { grid-area: start; }
                &.time-end   { grid-area: end; }
                &.info       { grid-area: info; }
                &.price      { grid-area: price; }
                &.tickets    { grid-area: tickets; }

                &::placeholder {
                    font-size: .7rem;
                    transform: translateY(-.6rem);
                    color: rgba($color: #FFF, $alpha: .6);
                }  
            } 

            .btn {
                grid-area: btn;
                background: $pink;
                border-radius: 3px;
                font-weight: 700;
                color: white;
                @extend %center;
                text-decoration: none;

                &:hover {
                    background: rgba($color: $pink, $alpha: .8);
                }
            }
        }
    }
}

</style>
