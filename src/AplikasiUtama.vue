<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import TeksPenting from './komponen/TeksPenting.vue';
import PemandanganMediaSosial from './pemandangan/PemandanganMediaSosial.vue';
</script>

<template>
  <nav @click="$router.push('/')" >
    <div id="pembungkus-logo">
        <img alt="Logo Maxflow Hagavi" 
        class="logo" 
        src="@/aset/icon.svg" 
        width="70" 
        height="70" />
    </div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/resume-ngajar">Teaching Resume</RouterLink>
    <RouterLink to="/resume-ngoding">Coding Exp / Project Resume</RouterLink>
  </nav>
  <div id="konten-utama">
    <header>
      <div class="tentang-saya">
          Hello World! My name is <TeksPenting pesan=Azzam />
          <br/>
          I'm a final year student at <a href="https://www.ui.ac.id/" style="color: #ffdd00">Universitas Indonesia</a>
          <br />
          I love doing <TeksPenting pesan="Software Engineering"/> stuff
          <br />
          <br />
          And also, as former math olympiad <TeksPenting pesan="Gold Medallist"/>
          <br />
          I currently <TeksPenting pesan="tutoring and training"/> some of the smartest students in Indonesia for Math Olympiad and Programming stuff.
          <br />
          <br/>
          Let's connect and work together!
      </div>
      <PemandanganMediaSosial/>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#konten-utama {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  margin: 0.75rem;
}
header {
  line-height: 1.5;
}

#pembungkus-logo {
    justify-content: center;
    display: flex;
    top: 0;
    cursor: pointer;
}
nav {
    font-size: 1.2rem;
    padding: 1rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
    background-color: var(--color-button);
    border-radius: 6pt;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
}

@media(hover: hover) {
    .pembungkus-logo:hover {
        cursor: pointer;
    }
}

.logo {
  display: block;
  justify-items: center;
  margin: 0 2rem;
}

.tentang-saya {
    font-size: 1.12rem;
    color: var(--color-heading);
}


@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>