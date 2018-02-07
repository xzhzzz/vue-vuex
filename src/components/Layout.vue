<template>
    <div class="layout">
        <section class="item" v-for="(item,index) in arr">
            {{index+1}}
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            };
        }
    };
</script>

<style lang="scss">
    .layout{
        display: flex;
        flex-wrap: wrap;
        .item{
            box-sizing: border-box;
            flex: 0 0 33.33%;
            height: 2.48rem;
            background-color: yellow;
            border: 1px solid red;
            text-align: center;
            line-height: 2.48rem;
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>