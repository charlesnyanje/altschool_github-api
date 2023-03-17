<script setup>
//render a single repo from FetchApi component
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import FetchApi from "../components/FetchApi.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const repos = ref([]);
const fetchRepo = async () => {
  const { data } = await axios.get(
    "https://api.github.com/users/charlesnyanje/repos"
  );
  repos.value = data;
  console.log(repos.value);
};

fetchRepo();

const getShortList = (num) => {
  return repos.value.slice(0, num);
};
</script>

<template>
  <!--display a single repo-->

  <div class="rep" v-for="(repo, key) in getShortList(1)" :key="repo.id">
    <h1>{{ repo.name }}</h1>

    <!--external link to github-->

    <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
      <button class="btn">View Repo</button>
    </a>
  </div>
</template>

<style>




</style>
