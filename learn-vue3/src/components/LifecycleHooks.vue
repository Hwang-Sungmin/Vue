<template>
    <div class="container py-4">
        <input ref="inputRef" type="text" value="hello world"/>
        <hr />

        <button @click="visible = !visible">Toggle Child</button>
        <LifecycleChild v-if="visible"></LifecycleChild>
        <p id="message">{{ message }}</p>
    </div>
</template>

<script>
    import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref} from 'vue';
    import LifecycleChild from './LifecycleChild.vue';
    export default {
        components: {
            LifecycleChild
        },
        setup() {
            const inputRef = ref(null);
            const message = ref('');
            const visible = ref(false);

            // console.log('setup()') onBeforeMount(() => {
            // console.log('onBeforeMount()', inputRef.value) }); onMounted(() => {
            // console.log('onMounted()', inputRef.value.value) }); onBeforeUpdate(()=>{
            // console.log('onBeforeUpdate ' , message.value);     console.log('DOM
            // Contents: ', document.querySelector('#message').textContent); });
            // onUpdated(()=>{     console.log('onUpdated' , message.value);
            // console.log('DOM Contents: ',
            // document.querySelector('#message').textContent); });
            return {inputRef, message, visible};
        }
    }
</script>

<style lang="scss" scoped="scoped"></style>