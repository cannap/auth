<template>
  <div> Logging out... </div>
</template>

<script setup lang="ts">
const {signOut} = useSession()

signOut({redirect: true, callbackUrl: 'https://fibranode.com/'})
</script>