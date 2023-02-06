<template>
    <div>
        <p>{{ message }}</p>
        <button v-on:click="addMessage">add click</button>
    </div>
</template>
<script>
    import {ref} from 'vue';
    export default {
        setup() {
            //reactive 객체는 ref (객체나 배열)
            let message = ref('Hello Vue'); 
            
            const addMessage = () => {
                message.value = message.value + '!';
            };
            
            console.log('message : ', message)
            console.log('message : ', message.value)
            console.log('message typeof : ', typeof message.value)
            return {message, addMessage};
        }
    };
</script>

<style lang="scss" scoped="scoped"></style>