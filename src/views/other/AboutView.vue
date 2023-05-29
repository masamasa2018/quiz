<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { is } from "@babel/types";
import quizData from "../../model/quiz/quizData"; 

function isJson(data: string): boolean {
	try {
		JSON.parse(data);
	} catch (error) {
		return false;
	}
	return true;
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
