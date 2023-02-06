<template>
    <div>
        <button v-on:click="testIncrement">
            Click{{ state.count }}</button>
        <button v-on:click="testIncrement">
            Deep Click{{ state.deep.count }}</button>
    </div>
</template>

<script>
    import {reactive} from 'vue';
    export default {
        setup() {
            const state = reactive({
                count: 0,
                deep: {
                    count: 0
                }       
            });
            const testIncrement = () => {
                state.count++;
                state.deep.count += 2;
            };

            return {state, testIncrement};
        }
    };
</script>

<style lang="scss" scoped="scoped"></style>