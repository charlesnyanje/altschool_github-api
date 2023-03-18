<script setup>
import { RouterLink, RouterView } from "vue-router";



</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
        <RouterLink to="/repos" class="link">Repos</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style>
body {
  overflow: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-background);
  --section-gap: 2rem;
  --color-text: #333;
  --color-background: #fff;
  --color-border: #ddd;
  --color-link: #007bff;
  --color-link-hover: #0056b3;
  --color-link-focus: #0056b3;
  --color-link-active: #0056b3;
}
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
  top: 0;
  left: 0;
}

.container {
  width: 100vw;
  padding: 0;
  margin: 0;
}

.link {
  color: gray;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  transition: all 0.3s ease-in-out;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
