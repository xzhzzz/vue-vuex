<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide style="height: 100vh">
                <hello-world></hello-world>
            </swiper-slide>
            <swiper-slide style="height: 100vh">
                <layout></layout>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import HelloWorld from '../../components/HelloWorld.vue';
    import Layout from '../../components/Layout.vue';
    export default {
        data () {
            return {
                swiperOption: {}
            };
        },
        components: {
            HelloWorld,
            Layout
        },
        computed: {
            swiper () {
                return this.$refs.mySwiper.swiper;
            }
        }
    };
</script>

<style lang="scss">

</style>