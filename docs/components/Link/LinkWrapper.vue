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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem;

  @media (min-width: 640px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 768px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1024px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1280px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
