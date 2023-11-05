<script setup>
import { ref } from 'vue';
import WelcomeItem from './../components/WelcomeItem.vue';
import DocumentationIcon from './../components/icons/IconDocumentation.vue';

const show = ref(true);
const vColor = {
  mounted: (el, binding) => {
    const colors = binding.value;
    if (binding.modifiers.underline) {
      el.style.textDecoration = 'underline';
    }
    const speeds = {
      normal: 1000,
      slow: 1500,
      high: 500,
      crazy: 200,
    };

    const speedName = binding.arg || 'normal';
    const speed = speeds[speedName];

    let i = 0;
    el.__colorInterval = setInterval(() => {
      console.log(colors[i]);
      el.style.color = colors[i];
      i++;
      if (i === colors.length) i = 0;
    }, speed);
  },
  unmounted: (el) => {
    clearInterval(el.__colorInterval);
  },
};
</script>

<template>
  <div class="about">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Custom Color Directive</template>

      <h1 v-if="show" v-color:high.underline="['blue', 'red', 'green', 'purple']">
        This is custom color directive page
      </h1>
      <br />
      <button @click="show = !show">Toggle</button>
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
