<template>
    <div class="container py-4">
        <button class="btn btn-primary me-2"  @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
        <hr/>
        <component :is="cuurentComp"/>
    </div>
</template>

<script setup="setup">
    import {ref} from 'vue';
    import DynamicApple from './DynamicApple.vue';
    import DynamicBanana from './DynamicBanana.vue';

    const cuurentComp = ref(DynamicApple)
    const changeCurrentComp = (comp) => {
        cuurentComp.value = comp
    };
</script>

<style lang="scss" scoped="scoped"></style>