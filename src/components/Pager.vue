<template>
    <footer class="pager">
        <ul>
            <li v-for="(step, index) in steps" :key="index" :class="{ active : step == activeStep }"></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'pager',
    props: ['activeStep'],
    data(){
        return {
            steps: 3
        }
    }
}
</script>

<style lang="scss">
    .pager {
        display: flex;
        height: 4rem;

        ul {
            flex: 1;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;

            li {
                width: .5rem;
                height: .5rem;
                margin: 1rem;
                background: white;
                border-radius: 999rem;
                background: rgba($color: #fff, $alpha: .4);
            
                &.active {
                    background: white;
                }

            }
        }

    }
</style>
