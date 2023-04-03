<template>
  <main class="view-container">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>

  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cachedViews= ref([])

onBeforeUpdate(() => {
  let isCached = route.meta?.cache
  let name = route.name as any
  if (isCached && name && !(cachedViews.value as string[]).includes(name)) {
    (cachedViews.value as string[]).push(name)
  }
});

</script>
