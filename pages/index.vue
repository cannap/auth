<template>
  <div>
    Loading...
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {navigateTo} from "#app";

definePageMeta({
  middleware: () => {
    if (useSession().status.value === 'authenticated') {
      navigateTo('https://example.com', {external: true})
    }
  }
})
</script>
