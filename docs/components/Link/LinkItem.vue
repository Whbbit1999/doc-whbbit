<script lang="ts" setup>
const props = defineProps({
  label: { type: String, require: true },
  link: { type: String, require: true },
  blank: { type: String, require: true },
});
</script>

<template>
  <a class="w-link" :target="blank ? '_blank' : ''" :href="link">{{ label }}</a>
</template>

<style lang="scss">
.w-link {
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #000;
  border: 1px solid #eee;
  &:hover {
    box-shadow: 0 0 10px #eee, 0 0 30px #ddd;
  }
}
</style>
