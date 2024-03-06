<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TeksPenting from './komponen/TeksPenting.vue';
import PemandanganMediaSosial from './pemandangan/PemandanganMediaSosial.vue';
</script>

<template>
    <header>
        <div class="pembungkus-logo" @click="$router.push('/')" >
            <img alt="Logo Maxflow Hagavi" 
                class="logo" 
                src="@/aset/icon.svg" 
                width="125" 
                height="125" />
        </div>
        <div class="tentang-saya">
            Hello World! My name is <TeksPenting msg=Azzam />
            <br/>
            I'm a final year student at <a href="https://www.ui.ac.id/" style="color: #ffdd00">Universitas Indonesia</a>
            <br />
            I love doing <TeksPenting msg="Software Engineering"/> stuff
            <br />
            <br />
            And also, as former math olympiad <TeksPenting msg="Gold Medallist"/>
            <br />
            I currently <TeksPenting msg="tutoring and training"/> some of the smartest students in Indonesia for Math Olympiad and Programming stuff.
            <br />
            <br/>
            Let's connect and work together!
        </div>
        <PemandanganMediaSosial/>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/pengalaman">Experience</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
    <div class="pembungkus-logo" @click="$router.push('/')" >
            <img alt="Logo Maxflow Hagavi" 
                class="logo" 
                src="@/aset/icon.svg" 
                width="125" 
                height="125" />
        </div>
        <div class="pembungkus-logo" @click="$router.push('/')" >
            <img alt="Logo Maxflow Hagavi" 
                class="logo" 
                src="@/aset/ikon/linkedin.svg" 
                width="125" 
                height="125" />
        </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.pembungkus-logo {
    justify-content: center;
    display: flex;
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

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  display: grid;
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
  border-top: 1px dotted var(--color-border);
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
  }

  nav {
    text-align: left;
    margin-left: -1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>