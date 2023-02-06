<template>
    <div class="container py-4">
        {{ msg }}
        <br>
        {{ message }}
        <input v-model="message" type="text">
        <button @click="sayHello">click</button>
        <PostItem type="news" title="제목" contents="내용" :is-Like="true"></PostItem>
    </div>
</template>

<script setup="setup">
import PostItem from '@/components/setup/PostItem.vue'
import { ref } from 'vue';

    const msg = 'Hello World!';
    const sayHello = () =>{
        alert('hello World');
    }
    const message = ref('');
</script>

<style lang="scss" scoped="scoped"></style>