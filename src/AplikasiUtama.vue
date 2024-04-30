<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import TeksPenting from './komponen/TeksPenting.vue';
import PemandanganMediaSosial from './pemandangan/PemandanganMediaSosial.vue';
import PemandanganTumpukanTeknologi from './pemandangan/PemandanganTumpukanTeknologi.vue';
const router = useRouter();
function handleClick(path: string) {
      router.push(path); 
      if(path === '/') {
        window.scrollTo({top: 0, behavior: 'smooth'});
        return;
      }
      let targetID = 'pengalaman'
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Target section not found');
      }
    }
</script>

<template>
  <nav >
    <div id="pembungkus-logo" @click="handleClick('/')">
        <img alt="Logo Maxflow Hagavi" 
        class="logo" 
        src="@/aset/icon.svg" 
        width="70" 
        height="70" />
    </div>
    <div class="pembungkus-link">
      <div class="nav-link">
        <a @click="handleClick('/')">Home</a>
      </div>
      <div class="nav-link">
        <a @click="handleClick('/resume-ngajar')">Teaching Resume</a>
      </div>
      <div class="nav-link">
        <a @click="handleClick('/resume-ngoding')">Coding Exp / Project Resume</a>
      </div>
    </div>
  </nav>
  <div id="konten-utama">
    <header>
      <div id="tentang-saya">
          <br/>
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
      <br />
      <h3>Anyway my tech stack mastery so far:</h3>
      <br />
      <PemandanganTumpukanTeknologi />
    </header>
    <div id="pengalaman">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#konten-utama {
  display: flex;
  flex-direction: column;
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

.pembungkus-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-link {
  border-color: 1px solid white;
  border-radius: 10px;
  margin: 0.2rem;
  max-width: 320px;
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

#tentang-saya {
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

  #konten-utama {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .pembungkus-link {
  display: flex;
  flex-direction: row;
}
}
</style>