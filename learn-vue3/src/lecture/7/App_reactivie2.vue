<template>
    <div>
        <h2>author: {{ author }}</h2>
        <h2>title: {{ title }}</h2>
    </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
    setup () {
        const book = reactive({
            author: 'Vue Team',
            year: '2023',
            title: 'Vue 3 Guide',
            description: '당신은 지금 바로 이책을 읽습니다.',
            price: '무료',
        });

        //const {author, title} = toRefs(book);
        
        const author = toRef(book, 'author');
        const title = toRefs(book, 'title');

        console.log(typeof author)
        
        return {author, title,};
    },
};
</script>

<style lang="scss" scoped>

</style>