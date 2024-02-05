<script setup>
import {useRouter, useRoute} from 'vue-router'
import {onMounted} from "vue";

onMounted( () => {
  useRouter().push('/')
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
