<script setup lang="ts"></script>

<template>
  <div class="container"><slot /></div>
</template>

<style scoped>
.container {
  width: var(--container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
