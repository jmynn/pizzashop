<script setup lang="ts">
import ROUTES from '~/data/routes.ts';

const viewport = useViewport();
</script>

<template>
  <nav class="navbar">
    <template v-if="viewport.isGreaterOrEquals('custom')">
      <NuxtLink v-for="route in ROUTES" :to="route.path" class="link">
        {{ route.label }}
      </NuxtLink>
    </template>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  column-gap: min(80px, 5.29vw);
  flex-wrap: wrap;
}
.link {
  font-size: 18px;
  color: var(--color-light-gray);
}
.link.router-link-active {
  background: var(--gradient-accent);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    width: 6px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: var(--gradient-accent);
    position: absolute;
    bottom: -7px;
    left: 50%;
    translate: -50% 0;
  }
}
</style>
