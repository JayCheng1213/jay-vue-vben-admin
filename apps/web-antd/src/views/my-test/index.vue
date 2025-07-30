<template>
  <div style="padding: 24px">
    <!-- 卡片元件 -->
    <a-card title="使用者資訊卡片" style="margin-bottom: 24px">
      <p>這裡是卡片內的內容，可以放簡介、操作提示等等。</p>
    </a-card>

    <!-- 表格元件 -->
    <a-table :columns="columns" :data-source="dataSource" :pagination="false" />
  </div>
</template>

<script setup lang="ts">
import { Card, Table } from 'ant-design-vue'
import { ref } from 'vue'


defineOptions({
  components: {
    'a-card': Card,
    'a-table': Table,
  },
})

// 表格欄位
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年齡',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
]

// 表格資料
const dataSource = ref([
  {
    key: '1',
    name: 'Jaycheng',
    age: 21,
    address: '台北市',
  },
  {
    key: '2',
    name: 'Alex',
    age: 22,
    address: '高雄市',
  },
])
</script>

<style scoped>
/* 你也可以在這裡加上更多自訂樣式 */
</style>
