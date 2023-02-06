<template>
    <div class="card">
        <div class="card-body">
            Lifecycle Child
            <input id="input" type="text" />
        </div>
    </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
    setup () {
        // console.log('[Child] setup')
        onBeforeMount(() => {
            console.log('[Child] onBeforeMount')
        });
        onMounted(() => {
            console.log('[Child] onMounted')
        });
        onBeforeUnmount(()=>{
            console.log('[Child] onBeforeUnmount');
            console.log(document.querySelector('#input').textContent);
        });
        onUnmounted(() =>{
            console.log('[Child] onUnmounted');
            console.log(document.querySelector('#input').textContent);
        });
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>