<script setup>
import {ref} from "vue";

const props = defineProps(['code', 'text', 'scale', 'answers'])
const emit = defineEmits(['updateAnswer'])

let answer = ref("")

function updateAnswer() {
  emit('updateAnswer', props.code, answer.value)
}

</script>

<template>
  <div class="wrapper">
    <div class="question-text" v-text="props.text"></div>
    <div class="range">
      <input type="range" min="1" max="5" width="4em" list="scale" v-model="answer" @change="updateAnswer()">
      <datalist id="scale">
        <option v-for="(name, value) of props.scale" :value="value" :label="name"></option>
      </datalist>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  box-shadow: grey 0 0 5px;
  font-size: 2em;
  padding: 1em;
  margin: auto auto;
}

.question-text {
  box-shadow: grey 0 0 5px;
  padding: 1em;
}

.range {
  position: relative;
}

.range > input {
  width: 100%;
  /*-webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background: #ccc;
  }

  &::-moz-range-thumb {
    background: #ccc;
  }

  &::-ms-track {
    background: transparent;
  }

  &::-ms-fill-lower {
    background: #e1e1e1;
    border-radius: 10px;
  }

  &::-ms-fill-upper {
    background: #eee;
  }*/
}

#scale {
  display: flex;
  justify-content: space-between;
  height: auto;
  overflow: hidden;
  margin-top: 16px;
}

#scale > option:before {
  content: '';
  display: block;
  width: 0;
  height: auto;
  text-indent: 0;
}

</style>