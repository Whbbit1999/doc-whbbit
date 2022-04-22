## elemet-table

### 循环数据来展示 element 表格

> `element` 使用循环和 `template` 实现一个 `table-column`循环数据和数据的过滤

##### 代码如下

```vue
<template>
  <el-table :data="tableData">
    <el-table-column
      v-for="col in column"
      :key="col.id"
      :prop="col.prop"
      :lable="col.label"
      :width="col.width"
    >
      <template slot-scope="{ row }">
        <span v-if="column.prop == 'name'">
          {{ row.name | nameFilter }}
        </span>
        <span v-else>
          {{ row[column.prop] }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  filter: {
    nameFilter(val) {
      return val;
    },
  },
  data() {
    return {
      column: [
        { prop: "id", label: "ID", width: "" },
        { prop: "name", label: "姓名", width: "" },
      ],
      tableData: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
      ],
    };
  },
};
</script>
```

### 动态设置表格的高度

> 大概就是使用 element 表格的`height: 100`来进行设置，外部使用一个容器包裹起来。

##### 代码如下

```vue
<template>
<!-- 这里的style动态绑定，其中的height可以根据数据进行动态绑定 -->
<div :style="{
  display: 'flex',
  height: '500px'
}">
<el-table height="100%">
  ...
  <!-- el-table内容 -->
</el-table>
<div>
</template>
```

:::info
这里的外层容器需要设置为 flex 布局，里面的 el-table 的 height 属性设置为 100%
:::
