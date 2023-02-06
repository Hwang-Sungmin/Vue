<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMassage">Add Message</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNomaleMassage">Add Message</button>
  </div>
</template>

<script>
import { isRef, onMounted, onBeforeMount, ref } from "vue";

export default {
  setup() {
    console.log("setup()");
    const reactiveMessage = ref("Hello Reactive Message");
    const addReactiveMassage = () => {
      reactiveMessage.value = reactiveMessage.value + "!";
    };
    console.log("isRef(reactiveMessage) : ", isRef(reactiveMessage));

    let normalMessage = "Hello Nomal Message";
    const addNomaleMassage = () => {
      normalMessage = normalMessage + "!";
    };
    console.log("isRef(normalMessage) : ", isRef(normalMessage));

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    return {
      reactiveMessage,
      normalMessage,
      addReactiveMassage,
      addNomaleMassage,
    };
  },
};
</script>

<style></style>
