<script setup lang="ts">
import UnsurPengalaman from './UnsurPengalaman.vue'
import IconDocumentation from './ikon/IconDocumentation.vue'
import UnsurPemandanganPengalaman from './UnsurPemandanganPengalaman.vue'
import ToolingIcon from './ikon/IconTooling.vue'
import EcosystemIcon from './ikon/IconEcosystem.vue'
import CommunityIcon from './ikon/IconCommunity.vue'
import SupportIcon from './ikon/IconSupport.vue'
import TeksPenting from './TeksPenting.vue'
</script>

<template>
    <UnsurPemandanganPengalaman>
        <template #judul>
            Notable Math Olympiad Tutoring Experiences
        </template>
        <template #daftar-pengalaman>
            <UnsurPengalaman>
                <template #ikon>
                    <EcosystemIcon />
                </template>
                <template #kepala>
                    Tutoring Universitas Indonesia Contingent for ONMIPA Matematika 2024
                </template>
                <template #tanggal>
                    March 2024 - April 2024
                </template>
            </UnsurPengalaman>
            <UnsurPengalaman>
                <template #ikon>
                    <SupportIcon />
                </template>
                <template #kepala>
                    Tutoring SMAN 8 Jakarta for OSK (Olimpiade Sains Kota) Matematika 2024
                </template>
                <template #tanggal>
                    January 2024 - March 2024
                </template>
            </UnsurPengalaman>
            <UnsurPengalaman>
                <template #ikon>
                    <IconDocumentation />
                </template>
                <template #kepala>
                    Private Tutoring a student from Jawa Timur for OSN (Olimpiade Sains Nasional) SMA Matematika 2023
                </template>
                <template #tanggal>
                    May 2023 - June 2023
                </template>
            </UnsurPengalaman>
        </template>
    </UnsurPemandanganPengalaman>
</template> 
