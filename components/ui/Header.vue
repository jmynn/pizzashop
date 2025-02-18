<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <header class="header">
    <UiLogo />
    <UiNavbar />
    <div class="actions">
      <UiCartButton />
      <UiBurgerMenuButton v-if="viewport.isLessThan('custom')" />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 0 0;
}
.actions {
  display: flex;
  align-items: center;
  gap: 0 25px;
}
</style>
