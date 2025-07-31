<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import { Card, Table } from 'ant-design-vue';
import axios from 'axios';

export default defineComponent({
  name: 'MyTest',
  components: {
    ACard: Card,
    ATable: Table,
  },
  setup() {
    const userList = ref([]);
    const loading = ref(true);

    const columns = [
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '用戶名', dataIndex: 'username', key: 'username' },
      { title: '電子郵件', dataIndex: 'email', key: 'email' },
      { title: '公司名稱', dataIndex: ['company', 'name'], key: 'company' },
      { title: '城市', dataIndex: ['address', 'city'], key: 'city' },
    ];

    const fetchUsers = async () => {
      loading.value = true;
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        userList.value = res.data;
      } catch (error) {
        console.error('載入使用者資料失敗:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchUsers();
    });

    return {
      userList,
      columns,
      loading,
    };
  },
});
</script>

<template>
  <ACard title="使用者列表" :loading="loading">
    <ATable :columns="columns" :data-source="userList" row-key="id" bordered />
  </ACard>
</template>
