<script setup lang="ts">
useHead({ title: 'Links' })
definePageMeta({
  layout: {
    props: {
      cornerIcon: 'mdi:link',
    },
  },
})
</script>

<template>
  <div class="page-container">
    <div class="content">
      <SectionTitle icon="mdi:arrow-top-right-thick">
        FRIENDS' SITES
      </SectionTitle>
      <div class="links">
        <FriendLink
          name="lachrymaL" to="https://lachrymal.net"
          avatar="https://avatars.githubusercontent.com/u/13716477"
        />
        <FriendLink
          name="alivemaster" to="https://yasunaori.be/"
          avatar="https://avatars.githubusercontent.com/u/21076137"
        />
        <FriendLink
          name="megakite" to="https://megakite.icu"
          avatar="https://avatars.githubusercontent.com/u/20639794"
        />
        <FriendLink
          name="Akuta Zehy" to="https://akutazehy.github.io"
          avatar="https://avatars.githubusercontent.com/u/42381419"
        />
        <FriendLink
          name="熊可狸" description="KumaKorin" to="https://korin.im/"
          avatar="https://i1.mcobj.com/uploads/20210623_b735dde7c665d.jpeg"
        />
        <FriendLink
          name="WZQ'02" to="https://wzq02.top/"
          avatar="https://avatars.githubusercontent.com/u/52278929"
        />
        <FriendLink
          name="哞菇" description="Nekotora" to="https://flag.moe/"
          avatar="https://avatars.githubusercontent.com/u/7263028"
        />
        <FriendLink
          name="菜鸡" description="Yasaitori" to="https://www.yatori.cc/"
          avatar="https://avatars.githubusercontent.com/u/118044114"
        />
        <FriendLink
          name="Hakadao" to="https://hakadao.cc/"
          avatar="https://avatars.githubusercontent.com/u/33394391"
        />
        <FriendLink
          name="唐辫小二" description="Larmax Harker" to="https://larmaxharkerx.github.io/"
          avatar="https://i1.mcobj.com/imgb/u1/20260109_69606ac284bd2.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 960px;
}

.section-title {
  animation: link-intro 800ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
}

@keyframes link-intro {
  from {
    transform: translateY(100vh);
  }
}

@for $i from 1 through 12 {
  .links a:nth-of-type(#{$i}) {
    animation-delay: 50ms * ($i - 1);
    animation-duration: 800ms + 20ms * ($i - 1);
  }
}

.links {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  overflow: hidden;
  animation: link-intro 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
  background-color: var(--card);

  @include tablet {
    grid-template-columns: repeat(3, 1fr);
  }

  @include phone {
    padding: 0.5rem;
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  a {
    animation: link-intro 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
  }
}
</style>
