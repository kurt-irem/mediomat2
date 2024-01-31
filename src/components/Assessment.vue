<script setup>
import Question from "@/components/Question.vue";
import {ref} from "vue";

let questions = [
  {
    code: "position",
    text: "Welche politische Position vertrittst du?",
    scale: {
      1: "extrem links",
      2: "links",
      3: "mitte",
      4: "rechts",
      5: "extrem rechts",
    }
  },
  {
    code: "easyness",
    text: "Wie wichtig ist dir leichte Sprache",
    scale: {
      1: "sehr unwichtig",
      2: "unwichtig",
      3: "neutral",
      4: "wichtig",
      5: "sehr wichtig",
    }
  },
  {
    code: "people",
    text: "Aus wie vielen Personen soll die Redaktion bestehen?",
    scale: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
    }
  }
]

let answers = ref({})
let result = ref("")
function saveAnswer(code, answer) {
  answers.value[code] = answer
}

const media = [
  {
    name: "Rechte ecke",
    rating: {
      position: 5,
      easyness: 5,
      people: 1,
    }
  },
  {
    name: "Linkes pack",
    rating: {
      position: 1,
      easyness: 1,
      people: 5,
    }
  },
  {
    name: "Goldene Mitte",
    rating: {
      position: 3,
      easyness: 3,
      people: 3,
    }
  }
]

const dimensions = ['position', 'easyness', 'people']

function computeResult() {
  let diffs = []

  for (let medium of media) {
    let diff = 0
    for (let dim of dimensions) {
      diff += Math.abs(answers.value[dim] - medium.rating[dim])
    }
    diffs.push({
      name: medium.name,
      diff: diff
    })
  }

  let closest = diffs.reduce(
      (acc, val) => acc.diff < val.diff ? acc : val
  )

  result.value = closest.name
}
</script>

<template>
  <h1>Assessment</h1>
  <div v-for="question of questions">
    <Question :code="question.code" :text="question.text" :scale="question.scale" :answers="answers.value"
              @update-answer="saveAnswer"/>
  </div>
  <div>
    <button @click="computeResult">Wer bin ich?</button>
    <span>{{result}}</span>
  </div>
</template>

<style scoped>

</style>