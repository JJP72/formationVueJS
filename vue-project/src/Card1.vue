<script setup>
import {ref, reactive} from "vue";

const myClass = ref("");

const props = defineProps(["title","buttonText", "color"]);

const handler = () => {
    console.log("click !");
};
const addClass = (valeur) => { myClass.value = valeur};
addClass( props.color );
</script>

<template>
  <div className="container">
    <h5 className="title">Special title treatment : {{ props.title }}</h5>
    <p className="content">
        <slot>valeur par defaut.</slot>
    </p>
    <h1 :class="myClass">{{  myClass }}</h1>
    <button 
      className="button"
      :class="myClass"
      @click.once="addClass( 'title' )" >
      {{ props.buttonText }}
    </button>
    <!-- @click.once="addClass( props.color )" -->
    <!--  v-on:click => @click -->
    <button 
      :className="props.color"
       > button 2 
      {{ props.buttonText }}
    </button>
    </div>
</template>
 
<style scoped>
  .container {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }
  .title {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 20px;
    color: blue;
  }
  .button {
    background-color: #0d6fff;
    border: 1px solid #0d6fff;
    color: white;
    border-radius: 3px;
    padding: 6px 12px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #0a58cc;
    border: 1px solid #0a58cc;
  }
  .danger {
    background-color: red;
    border: 1px solid red;
  }
</style>

