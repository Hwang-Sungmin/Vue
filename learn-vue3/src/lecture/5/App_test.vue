<template>
  <div>
    <h2>테스트</h2>
    <p v-once>{{ message }}</p>
    <p>{{ message }}</p>
    <button v-on:click="message = message + '!'">클릭</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("안녕하세요");
    return {
      message,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
