<script setup lang="ts">
useHead({ title: 'Links' })
</script>

<template>
  <div class="page-container">
    <h2>+ Friends' Sites +</h2>
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
        name="菜鸡" description="Yasaitori" to="https://www.yatori.fun/"
        avatar="https://avatars.githubusercontent.com/u/118044114"
      />
      <FriendLink
        name="Hakadao" to="https://hakadao.cc/"
        avatar="https://avatars.githubusercontent.com/u/33394391"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

h2 {
  color: var(--accent-500);
  font-size: 1.5rem;
  text-align: center;
  animation: link-intro 800ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;

  @include dark {
    @include small-text-shadow;
  }
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
  width: calc(100% - 2rem);
  max-width: 960px;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%);
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
