<script setup lang="ts"></script>

<template>
  <button class="burger"><IconBurgerMenu /></button>
</template>

<style scoped>
.burger {
  background: transparent;
  transition: var(--transition);
  opacity: 1;
}
@media screen and (hover: hover) and (pointer: fine) {
  .burger:hover {
    opacity: 0.7;
    transition: var(--transition);
    cursor: pointer;
  }
}
</style>
