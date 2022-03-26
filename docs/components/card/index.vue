<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
  },
});

const site = ref(props.data);

const handleClick = (link) => {
  window.open(link);
};
</script>

<template>
  <div class="w-card" @click="handleClick(site.link)">
    <div class="img">
      <img :src="site.img" :alt="site.title" />
    </div>
    <div class="container">
      <h2 class="title">{{ site.title }}</h2>
      <div class="desc">{{ site.desc }}</div>
      <!-- <div class="link">{{ site.link }}</div> -->
      <div class="tags">
        <div class="tag" v-for="tag in site.tag" :key="tag">{{ tag }}</div>
      </div>
      <!-- <div class="category">{{ site.category }}</div> -->
    </div>
  </div>
</template>

<style scoped>
.w-card {
  width: 100%;
  /* padding: 1rem; */
  transition: all 0.3s;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.w-card:hover {
  box-shadow: 0 0 20px #eee, 0 0 30px #ddd;
}

.container {
  padding: 1rem;
}
/* img */
.w-card .img {
  width: 100%;
  height: 6rem;
  overflow: hidden;
}

.w-card .img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.5s;
}

.w-card:hover .img img {
  transform: scale(1.1);
}

/* title */
.w-card .container h2.title {
  font-size: 1rem;
  border: none;
  text-align: left;
  padding: 0;
  margin: 0;
}

/* desc */
.w-card .container .desc {
  padding-top: 0.3rem;
  font-size: 0.8rem;
}
/* tag */
.w-card .tags {
  margin: 0.2rem 0;
  display: flex;
  gap: 5px;
}
.w-card .tag {
  border: 1px solid rgba(0, 0, 0, 0.85);
  color: rgba(0, 0, 0, 0.85);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
}
/* category */
.w-card .category {
  position: absolute;
  top: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.85);
  color: #eee;
  padding: 0.1rem 0.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 4px 0 4px;
  font-size: 1rem;
}
</style>
