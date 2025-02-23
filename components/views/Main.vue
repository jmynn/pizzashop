<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <main class="main">
    <div class="info">
      <h1 class="title">
        <span
          >The Fastest <IconArrowRounded v-if="!viewport.isLessThan('custom')"
        /></span>
        <span>Pizza<IconLightning /> Delivery</span>
      </h1>
      <div class="subtitle">
        We will deliver juicy pizza for your family in 30{{ '\n' }} minutes, if
        the courier is late - <span>pizza is free!</span>
      </div>
      <div class="process">
        <div>Cooking process:</div>
        <NuxtImg
          src="/main/small.jfif"
          alt="left main picture"
          format="webp"
          class="processPic"
          preload
        />
      </div>
      <NuxtLink to="/" class="order">
        <div class="left">To order</div>
        <div class="right">Pizza-Menu</div>
        <IconArrowDotted
          class="__arrow"
          v-if="!viewport.isLessThan('custom')"
        />
      </NuxtLink>
    </div>
    <div class="picture">
      <NuxtImg
        src="/main/big.png"
        alt="main picture"
        format="webp"
        class="mainPic"
        preload
      />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column-reverse;
  gap: 75px 0;
  margin: 50px 0 70px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}
.picture {
  display: flex;
  justify-content: center;
  position: relative;
}
.mainPic {
  width: min(64.515%, 456px);
  border-radius: 46px;
}
.title {
  color: var(--color-white);
  font-size: clamp(48px, 11.29vw, 70px);
  font-weight: 800;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-items: center;
    gap: 0 10px;
    &:last-child {
      svg {
        max-width: 35px;
      }
    }
  }
}
.subtitle {
  color: var(--color-light-gray);
  white-space: pre-line;
  line-height: 150%;
  font-size: clamp(1em, 3.29vw, 20px);
  span {
    color: var(--color-white);
  }
}
.process {
  order: 3;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  div {
    color: var(--color-light-gray);
    font-size: clamp(1em, 3.29vw, 20px);
  }
}
.processPic {
  width: min(51.46%, 272px);
  border-radius: 23px;
}
.order {
  order: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  position: relative;
  background: var(--gradient-bg);
  border-radius: 100px;
  font-size: clamp(1rem, 3.76vw, 23px);
  &::after {
    content: '';
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 100px;
    background: var(--gradient-accent);
    z-index: -1;
    position: absolute;
  }
  div {
    &.left {
      color: var(--color-white);
      background: var(--gradient-accent);
      padding: 13px 50px;
      border-radius: 100px;
    }
    &.right {
      color: transparent;
      background: var(--gradient-accent);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: 13px 17px;
    }
  }
  svg {
    position: absolute;
    right: -50%;
    top: 50%;
  }
}

@media screen and (min-width: 1024px) {
  .main {
    flex-direction: row;
    align-items: center;
  }
  .mainPic {
    width: min(100%, 456px);
  }
  .process {
    order: 2;
  }
  .order {
    order: 3;
  }
}
</style>
