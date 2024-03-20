<script setup lang="ts">
import UnsurPengalaman from './UnsurPengalaman.vue'
import IconDocumentation from './ikon/IconDocumentation.vue'
import ToolingIcon from './ikon/IconTooling.vue'
import EcosystemIcon from './ikon/IconEcosystem.vue'
import CommunityIcon from './ikon/IconCommunity.vue'
import SupportIcon from './ikon/IconSupport.vue'
import TeksPenting from './TeksPenting.vue'
</script>

<template>
  <h2>Notable Experiences in Tech Industry</h2>
  <UnsurPengalaman>
    <template #ikon>
        <ToolingIcon />
    </template>
    <template #kepala>
        Front End Intern at Doku
    </template>
    <template #tanggal>
        March 2024 - September 2024
    </template>
    I do a lot of Kotlin and PHP (expected)
  </UnsurPengalaman>
  <UnsurPengalaman>
    <template #ikon>
        <IconDocumentation />
    </template>
    <template #kepala>
        Front End Intern at Collega
    </template>
    <template #tanggal>
        July 2024 - October 2024
    </template>
    Developing admin dashboard for Banking SmartBranch (smart and self service banking service in each banking branch office) with <TeksPenting pesan="React JS" />.
  </UnsurPengalaman>
  <br />
</template> 
