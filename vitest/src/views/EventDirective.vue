<script setup>
import { ref } from 'vue';
import WelcomeItem from './../components/WelcomeItem.vue';
import DocumentationIcon from './../components/icons/IconDocumentation.vue';
import ToolingIcon from './../components/icons/IconTooling.vue';
const handleClickedOutside = () => alert('you clicked outside');
</script>

<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Custom Event Directive</template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <h2 class="title">Clicked OutSide</h2>
      <div class="box" v-clicked-outside="handleClickedOutside">Clicked Inside</div>
    </WelcomeItem>
  </main>
</template>

<style>
.title {
  padding: 15px;
}
.box {
  height: 200px;
  width: 300px;
  border: 2px solid orangered;
  text-align: center;
  padding: 15px;
  font-size: 18px;
}
</style>
