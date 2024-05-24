<template>
  <div class="gallery grid">
    <div class="avatar" style="--img:url('/images/team/1.jpg')" title="Jane Richmond"></div>
    <div class="avatar" style="--img:url('/images/team/2.jpg')" title="Gordon Smith"></div>
    <div class="avatar" style="--img:url('/images/team/3.jpg')" title="Harris Jackson"></div>
    <div class="avatar !flex justify-center items-center after:hidden" style="--img:url('/images/team/Vector.jpg')">
      <span class="text-sequel-normal text-white z-10 text-center">MORE <br /> DETAILS</span>
    </div>
    <div class="avatar" style="--img:url('/images/team/4.jpg')" title="Jane Richmond"></div>
    <div class="avatar" style="--img:url('/images/team/5.jpg')" title="Gordon Smith"></div>
    <div class="avatar" style="--img:url('/images/team/6.jpg')" title="Harris Jackson"></div>
  </div>
</template>

<style scoped>
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


body {
  background-color: #19191a;
  display: grid;
  place-content: center;
  min-height: 100vh;
  padding: 1rem;
  font-family: system-ui, sans-serif;
}

.gallery {
  --_width: 50px;
  --_border-width: 3px;
  --_border-width-hover: 6px;
  --_border-clr: #ff2e00;
  --_h2-bg-clr: rgba(32, 142, 206, 0.9);
  --_h2-txt-clr: black;
  --_transition-speed: 300ms;
  --_clip: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);

  width: fit-content;
  max-width: 4xl;
  grid-template-columns: repeat(6, 70px);
  row-gap: 4px;
  column-gap: 2px;
  background: radial-gradient(50% 50% at 50% 50%, #ff2e00 0%, rgba(26, 26, 27, 0) 100%);
}

.avatar {
  background-color: var(--_border-clr);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  grid-column: span 4 / span 4;
  grid-row: span 4 / span 4;
  width: 140px;
  height: 160px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  clip-path: var(--_clip);
  white-space: pre;
  transition: clip-path ease-in-out var(--_transition-speed) var(--_transition-speed),
    opacity ease-in-out var(--_transition-speed),
    scale ease-in-out var(--_transition-speed);

}


.avatar::before {
  content: '';
  position: absolute;
  inset: var(--_border-width);
  clip-path: var(--_clip);
  background-image: var(--img);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: var(--_transition-speed) ease-in-out;

}

.avatar::after {
  content: attr(title);
  position: absolute;
  width: 100%;
  padding: .25rem 0;
  text-align: center;
  inset: 70% 0 0 0;
  color: #fff;
  font-weight: semibold;
  font-size: 8px;
  transition: all var(--_transition-speed) ease-in-out;
  opacity: 0;
  translate: 0 100%;
  z-index: 3;
}

.avatar:has(~ .avatar:hover),
.avatar:hover~.avatar {
  opacity: 75%;
  scale: 75%;
}

.avatar:hover {
  z-index: 100;
  scale: 150%;
}

.avatar:hover::before {
  inset: var(--_border-width-hover);
}

.avatar:hover::after {
  opacity: 1;
  translate: 0;
  transition-delay: calc(var(--_transition-speed) * 0.5);
}

.avatar:not(:hover) {
  animation: KPzIndexHack 500ms;
}

.avatar:nth-child(1) {
  grid-row-start: 1;
  grid-column-start: 2;
}

.avatar:nth-child(2) {
  grid-row-start: 1;
  grid-column-start: 4;
}

.avatar:nth-child(3) {
  grid-row-start: 4;
  grid-column-start: 1;
}

.avatar:nth-child(4) {
  grid-row-start: 4;
  grid-column-start: 3;
}

.avatar:nth-child(5) {
  grid-row-start: 4;
  grid-column-start: 5;
}

.avatar:nth-child(6) {
  grid-row-start: 7;
  grid-column-start: 2;
}

.avatar:nth-child(7) {
  grid-row-start: 7;
  grid-column-start: 4;
}


/* Kevin Powel z-index hack */
@keyframes KPzIndexHack {
  100% {
    z-index: 10;
  }
}
</style>
