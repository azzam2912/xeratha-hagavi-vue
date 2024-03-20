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
  <br />
  <h2>Notable Math Olympiad and Competitive Programming Achievement</h2>
  <UnsurPengalaman>
    <template #ikon>
        <EcosystemIcon />
    </template>
    <template #kepala>
        Gold Medal ONMIPA Matematika 2022 National Level
    </template>
    <template #tanggal>
        2022
    </template>
  </UnsurPengalaman>
  <UnsurPengalaman>
    <template #ikon>
        <CommunityIcon />
    </template>
    <template #kepala>
        Bronze Medal OSN Matematika 2019 National Level
    </template>
    <template #tanggal>
        2019
    </template>
  </UnsurPengalaman>
  <UnsurPengalaman>
    <template #ikon>
        <ToolingIcon />
    </template>
    <template #kepala>
        Finalist ICPC (International Collegiate Programming Contest) Asia Jakarta 2023
    </template>
    <template #tanggal>
        2023
    </template>
  </UnsurPengalaman>
  <br />
</template> 
