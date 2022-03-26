<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  tag: {
    type: String,
  },
});

const tag = ref(props.tag);
</script>

<template>
  <div class="w-tag">{{ tag }}</div>
</template>

<style scoped>
.w-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.85);
  color: rgba(0, 0, 0, 0.85);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}
.w-tag.active {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  color: #eee;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
}
</style>
