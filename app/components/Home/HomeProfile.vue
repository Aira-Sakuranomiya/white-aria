<script setup lang="ts">

</script>

<template>
  <section id="profile">
    <div class="text">
      <SectionTitle icon="mdi:person">
        PROFILE
      </SectionTitle>

      <div class="list">
        <HomeProfileItem icon="material-symbols:location-on">
          Shanghai
        </HomeProfileItem>

        <HomeProfileItem icon="material-symbols:cake">
          2003/12/24
        </HomeProfileItem>

        <hr>

        <HomeProfileItem icon="material-symbols:design-services">
          Design
        </HomeProfileItem>

        <HomeProfileItem icon="material-symbols:code">
          Code
        </HomeProfileItem>

        <HomeProfileItem icon="material-symbols:favorite">
          Cute
        </HomeProfileItem>

        <HomeProfileItem icon="material-symbols:music-note">
          Otomad
        </HomeProfileItem>

        <HomeProfileItem icon="material-symbols:fort">
          Arknights
        </HomeProfileItem>

        <HomeProfileItem icon="tabler:cube">
          Minecraft
        </HomeProfileItem>
      </div>
    </div>

    <NuxtImg
      src="https://i1.mcobj.com/uploads/20230804_64cbee56379a2.webp" class="side-img" alt="A photo of me"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-block: 8rem;
  padding-inline: 8vw;
  overflow: clip;

  @include small-tablet {
    padding-inline: 1rem;
    flex-direction: column-reverse;
    gap: 2rem;
  }
}

.text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@keyframes list-intro {
  from {
    transform: translateX(-100%);
  }
}

@keyframes list-item-intro {
  from {
    transform: translateX(-150%);
    opacity: 0;
  }
}

.list {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1.5rem;
  animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards list-intro;
}

@for $i from 1 through 9 {
  .list > div:nth-of-type(#{$i}) {
    animation-delay: 50ms * ($i - 1);
    animation-duration: 800ms + 20ms * ($i - 1);
  }
}

@keyframes side-img-wrapper-intro {
  from {
    transform: translateX(100%);
    // filter: blur(100rem);
  }
}

@keyframes opacity-intro {
  from {
    opacity: 0;
  }
}

.side-img {
  animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards side-img-wrapper-intro;
  min-width: 0;
  max-width: 100%;
  object-fit: cover;
  flex-grow: 1;
  max-width: 1280px;
}
</style>
