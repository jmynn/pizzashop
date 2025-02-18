<script setup lang="ts"></script>

<template>
  <NuxtLink to="/cart" class="cart"><IconCart /></NuxtLink>
</template>

<style scoped>
.cart {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--gradient-accent);
  padding: 4px;
  border-radius: 50%;
  transition: var(--transition);
  opacity: 1;
  user-select: none;
}

@media screen and (hover: hover) and (pointer: fine) {
  .cart:hover {
    opacity: 0.7;
    transition: var(--transition);
    cursor: pointer;
  }
}
</style>
