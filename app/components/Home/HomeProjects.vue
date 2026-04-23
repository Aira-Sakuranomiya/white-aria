<script setup lang="ts">

</script>

<template>
  <section id="projects">
    <SectionTitle icon="mdi:arrow-top-right-thick">
      PROJECTS
    </SectionTitle>
    <div class="project-list">
      <Project href="https://space.bilibili.com/171767281/" name="NOVA音MAD社" icon="logo:nova" />
      <Project href="https://otomad.wiki/" name="OtomadWiki" icon="logo:otomadwiki" />
      <Project href="https://www.calibur.tv/" name="calibur" icon="logo:calibur" />
      <Project href="https://kirakira.moe" name="KIRAKIRA" icon="logo:kirakira" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding-inline: 8vw;
  margin-block: 5rem;

  @include phone {
    padding-inline: 1rem;
  }
}

.project-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  @include tablet {
    flex-direction: column;
  }

  @include phone {
    grid-template-columns: 1fr;
  }
}
</style>
