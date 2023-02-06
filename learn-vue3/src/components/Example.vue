<template>
    <main>
        <div class="container py-4">
            <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
            <LabelInput label="이름" data-id="id입니다"></LabelInput>
            <hr/>
            <FencyButton>Click!!! </FencyButton>
            <FencyButton></FencyButton>
            <hr/>
            <AppCard>
                <template #[slotArgs]>제목입니다</template>
                <!-- <template v-slot:default>내용입니다.</template>
                <template v-slot:footer>푸터입니다</template> -->
            </AppCard>
        </div>
    </main>
</template>

<script>
    import { ref } from 'vue';
    import MyButton from './MyButton.vue';
    import LabelInput from './LabelInput.vue';
    import FencyButton from './FencyButton.vue';
    import AppCard from '@/components/AppCard.vue';
    export default {
        components: {
            MyButton,
            LabelInput,
            FencyButton,
            AppCard,
        },
        setup() {
            const sayHello = () => {
                alert('안녕하세요!');
            };
            const slotArgs = ref('header');
            return {sayHello, slotArgs}
        }
    }
</script>

<style lang="scss" scoped="scoped"></style>