<script setup>
import {ref, reactive} from "vue";
import Card from "./Card.vue";

let state = reactive({
  counter: 0,
  username: "fzefze",
  password: ""
});
const handler = () => {
  console.log(state.username);
  console.log(state.password);
}

</script>

<template>
    <Card title="login" buttonText="Se connecter" @cliclic="handler">
        <label>username</label>
        <input :value="state.username" @input="e=> state.username=e.target.value"  />
        <label>passord</label>
        <input v-model="state.password"  />
    </Card>
</template>

<style scoped>
</style>