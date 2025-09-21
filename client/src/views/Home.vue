<template>
  <div class="p-4">
    <h1>{{ $t("app.welcome") }}</h1>
    <button @click="toggleLang">{{ currentLang }}</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const currentLang = locale;

function toggleLang() {
  locale.value = locale.value === "en" ? "fr" : "en";
}
</script>
