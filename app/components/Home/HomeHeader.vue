<script setup lang="ts">

</script>

<template>
  <div class="home-header">
    <div class="left">
      <div class="avatar-container">
        <!-- <NuxtImg
          src="https://i1.hdslb.com/bfs/face/17eade5b387921360571dd275b8e1508c049ba1b.jpg@390w_390h.webp"
          class="avatar" alt="My avatar" referrerpolicy="no-referrer"
        /> -->
        <NuxtImg
          src="/images/avatar.webp"
          class="avatar" alt="My avatar" referrerpolicy="no-referrer"
        />
      </div>
    </div>
    <div class="right">
      <div class="titles">
        <h1>
          <span>
            桜ノ宮
          </span>
          <b>
            <span class="first-name">
              <span>アイラ</span>
              <span class="small english-name">AIRA</span>
              <span class="small chinese-name">艾了个拉</span>
            </span>
          </b>
        </h1>
        <h2><b>Kind and Kawaii</b>, Forever!~</h2>
      </div>
      <SocialButtons />
    </div>
    <span class="material-icons more">expand_more</span>
  </div>
</template>

<style scoped lang="scss">
.home-header {
  display: flex;
  gap: 4vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @include small-tablet {
    flex-direction: column;
    gap: 2rem;
  }

  .left {
    display: flex;

    @include small-tablet {
      margin-top: 3vh;
      transform: none;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    @include small-tablet {
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }
  }
}

.avatar-container {
  position: relative;

  &::before {
    position: absolute;
    // z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--accent-500);
    border-radius: 50%;
    opacity: 0;
    animation: avatar-ripple 1s cubic-bezier(0.64, 0, 0, 1);
    content: '';
  }
}

.avatar {
  position: relative;
  width: 28vw;
  max-width: 260px;
  border-radius: 100%;
  animation: 0.6s cubic-bezier(0.26, 1.44, 0.4, 1) both avatar-intro;

  @keyframes avatar-intro {
    from {
      scale: 0;
    }

    to {
      scale: 1;
    }
  }

  @include small-tablet {
    width: 30vh;
  }

  @include dark {
    filter: drop-shadow(0 0.05rem 2rem rgb(var(--accent-500-rgb) / 80%));
  }
}

.titles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--accent-500);

  @include small-tablet {
    align-items: center;
  }
}

h1,
h2 {
  font-weight: 500;
}

h1 {
  display: flex;
  align-items: flex-end;
  animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) 0.4s both move-in;
  gap: 0.5em;
  font-size: min(6vw, 4rem);
  font-family:
    -apple-system, BlinkMacSystemFont, 'Noto Sans CJK JP', 'Noto Sans JP', 'Yu Gothic', system-ui, sans-serif;

  @include small-tablet {
    font-size: 2.5rem;
  }

  b {
    display: flex;
    font-weight: 900;
  }

  .first-name {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    .small {
      font-size: 0.3em;
      line-height: 1;
      letter-spacing: 1em;
      text-align: center;
      text-indent: 1em;

      &.english-name {
        @include title-font;
        margin-bottom: -0.5em;
      }

      &.chinese-name {
        font-size: 0.24em;
        margin-bottom: 0.5em;
      }
    }
  }
}

h2 {
  font-size: clamp(1rem, 2vw, 1.2857rem);
  animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) 0.5s both move-in;
}

.social-buttons {
  margin-top: 4rem;
  margin-left: -0.8em;

  @include small-tablet {
    margin-left: 0;
  }
}

.more {
  position: absolute;
  bottom: 1rem;
  font-size: 1.5rem;
  animation: more 1s cubic-bezier(0.1, 0.9, 0.2, 1) 0.6s both;
  color: var(--neutral);
}

@keyframes move-in {
  from {
    opacity: 0;
    translate: 50vw 0;
  }
}

@keyframes more {
  from {
    opacity: 0;
    translate: 0 1rem;
  }
}

@keyframes avatar-ripple {
  0% {
    transform: scale(0);
    opacity: 0.8;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
