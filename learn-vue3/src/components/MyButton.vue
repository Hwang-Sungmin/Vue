<template>
    <div class="p-3 bg-danger">
        <!-- v-bind="$attrs" -->
        <button class="btn btn-primary" type="button" @click="sayHello">
            My Button
        </button>
        <!--{{ $attrs }}-->
    </div>
</template>

<script>
    export default {
        // inheritAttrs: false,
        emits: ['click'],
        setup(props, {emit}) {
            // console.log('context.attrs : ', context.attrs)
            const sayHello = () =>{
                emit('click');
            };
            return {sayHello};
        },
    };
</script>

<style lang="scss" scoped="scoped"></style>