<script setup>
//render a single repo from FetchApi component
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import FetchApi from "../../components/FetchApi.vue";
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

  <div class="repo-details">
    <div v-for="(repo, id) in repos" :key="repo.id">
      <div v-if="repo.id == router.currentRoute.value.params.id">
        <h2 class="repo-name">{{ repo.name }}</h2>
        <!--external link to github based on id-->

        <div class="link-btn">
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            <button class="btn">View Repo</button>
          </a>
        </div>
       
      </div>
    </div>
  </div>
</template>

<style>
.link-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
}

.btn {
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.repo-name {
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem auto;
}
.repo-details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem auto;
  box-shadow: 0px 2px 6px 8px rgba(0, 0, 0, 0.26);
  width: 80vw;
}
</style>
