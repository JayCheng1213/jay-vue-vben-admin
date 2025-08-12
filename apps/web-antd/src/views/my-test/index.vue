<template>
  <div class="p-4">
    <div class="border p-4 rounded shadow mb-4 bg-white">
      <h2 class="text-lg font-bold mb-2">歡迎來到 My Test 頁面</h2>
      <p class="text-gray-600">這是一張示範卡片</p>
    </div>

    <table class="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">姓名</th>
          <th class="border px-4 py-2">年齡</th>
          <th class="border px-4 py-2">地址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.age }}</td>
          <td class="border px-4 py-2">{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const userList = ref([]);

const getUserList = () => {
  return Promise.resolve({
    items: [
      { id: 1, name: '小明', age: 20, address: '台北市' },
      { id: 2, name: '小華', age: 22, address: '新北市' },
      { id: 3, name: '小美', age: 21, address: '高雄市' },
    ],
  });
};

onMounted(async () => {
  const res = await getUserList();
  userList.value = res.items;
});
</script>
