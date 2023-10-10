<script setup>
import {ref} from "vue";
import Card from "./Card.vue";

let counter = ref(5);

const handler1 = () => {
    counter.value--;
    console.log("-");
};

const handler2 = () => {
    counter.value++;
    console.log("+");
};

</script>

<template>
    <Card :title="counter" buttonText="bouton new" color="danger" @cliclic="handler1">
        Contenu app.vue
    </Card>
    <Card title="new title" buttonText="bouton new" @cliclic="handler2">
        Contenu app.vue
    </Card>
</template>

<style scoped>
</style>