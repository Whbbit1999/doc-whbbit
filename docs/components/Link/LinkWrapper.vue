<script lang="ts" setup>
interface ILink {
  label: string;
  link: string;
  blank?: boolean;
}
const props = defineProps({
  links: { type: Array as () => Array<ILink>, require: true },
});
</script>

<template>
  <div class="w-link-wrapper">
    <w-link-item
      v-for="item in links"
      :label="item.label"
      :link="item.link"
      :blank="item.blank"
    />
  </div>
</template>

<style lang="scss">
.w-link-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem;
}
</style>
