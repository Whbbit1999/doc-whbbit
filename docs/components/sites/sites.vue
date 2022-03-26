<script lang="ts" setup>
import { ref, watch } from "vue";
import sites from "../../data/site";
import Card from "../card/index.vue";
import Tag from "../tag/index.vue";
// import _ from "lodash";
// const sitesBak = _.cloneDeep(sites);
const showSites = ref(sites);
// 分类
const categories = ref([]);
const getCategories = () => {
  const _categories = [];
  sites.forEach((site) => {
    _categories.push(site.category);
  });
  categories.value = [...new Set(_categories)];
};
getCategories();

// 标签
const tags = ref([]);
const getTags = () => {
  const _tags = [];
  sites.forEach((site) => {
    _tags.push(...site.tag);
  });
  tags.value = [...new Set(_tags)];
};
getTags();

// 选中tags
const selectTags = ref([]);
const handleClickTag = (tag) => {
  const index = selectTags.value.indexOf(tag);
  if (index != -1) {
    selectTags.value.splice(index, 1);
  } else {
    selectTags.value.push(tag);
  }
};

// 选中categories
const selectCategory = ref("");
const handleClickCategory = (category) => {
  if (category === selectCategory) {
    selectCategory.value = "";
  }
  selectCategory.value = category;
};

// watch(
//   selectTags,
//   (val) => {
//     if (!val.length) {
//       showSites.value = sites;
//     } else {
//       showSites.value = showSites.value.filter((item) => {
//         console.log(item.tag);
//         console.log(selectTags.value);
//         console.log(selectTags.value.indexOf(item.tag));
//         return selectTags.value.indexOf(item.tag) != -1;
//       });
//     }
//   },
//   {
//     deep: true,
//   }
// );
watch(
  selectCategory,
  (val) => {
    if (!val.length) {
      showSites.value = sites;
    } else {
      showSites.value = sites.filter((item) => {
        return val === item.category;
      });
    }
  },
  {
    deep: true,
  }
);
</script>

<template>
  <div class="sites-page">
    <!-- 标签 -->
    <div class="sites-tab">
      <div class="category">
        <Tag
          tag="全部"
          :class="[selectCategory === '' ? 'active' : '']"
          @click="handleClickCategory('')"
        />
        <Tag
          v-for="category in categories"
          :key="category"
          :tag="category"
          :class="[selectCategory === category ? 'active' : '']"
          @click="handleClickCategory(category)"
        />
      </div>
      <!-- <div class="tags">
        <Tag
          v-for="tag in tags"
          :key="tag"
          :tag="tag"
          :class="[selectTags.includes(tag) ? 'active' : '']"
          @click="handleClickTag(tag)"
        />
      </div> -->
    </div>
    <!-- 站点卡片 -->
    <div class="sites">
      <Card
        v-for="site in showSites"
        :key="`${site.link}-${site.title}`"
        :data="site"
      />
    </div>
  </div>
</template>

<style scoped>
.sites-page .sites-tab {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}
.sites-page .sites-tab .category,
.sites-page .sites-tab .tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.sites {
  padding: 1rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>
