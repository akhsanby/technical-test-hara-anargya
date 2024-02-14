<script setup>
import { onMounted, ref } from "vue";
import LayoutVue from "../components/Layout.vue";
import { activeOrderBy, resultProvinces, getCitiesByProvinceId, getProvinceNameByCityId, resultCities, resultProvinceName, sortProvincesById, sortProvincesByName } from "../utils/func.js";
import { Icon } from "@iconify/vue";

const provinceId = ref(undefined);
const cityId = ref(undefined);

onMounted(() => {
  sortProvincesById();
});
</script>

<template>
  <LayoutVue>
    <div class="grid grid-cols-2 gap-2">
      <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900">Search City by Province Id</label>
          <input type="number" min="1" v-model="provinceId" @input="resultCities = undefined" @keydown.enter="() => getCitiesByProvinceId(provinceId)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Province Id" required autocomplete="false" />
        </div>
      </div>
      <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900">Search Name Province by City Id</label>
          <input type="number" min="1" v-model="cityId" @input="resultProvinceName = undefined" @keydown.enter="() => getProvinceNameByCityId(cityId)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="City Id" required autocomplete="false" />
        </div>
        <div class="mt-4 text-sm font-medium text-gray-900" v-if="resultProvinceName">
          City ID {{ cityId }} is <span class="font-bold">{{ resultProvinceName }}</span> Province
        </div>
      </div>
      <div v-if="resultCities" class="col-span-2 relative overflow-x-auto rounded-lg shadow border border-gray-200 mb-5">
        <div class="px-6 py-3 font-bold border-b border-gray-300">City List</div>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">id</th>
              <th scope="col" class="px-6 py-3">province id</th>
              <th scope="col" class="px-6 py-3">name</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b" v-for="city in resultCities">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ city.id }}</th>
              <td class="px-6 py-4">{{ city.provinsi_id }}</td>
              <td class="px-6 py-4">{{ city.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-2 relative overflow-x-auto rounded-lg shadow border border-gray-200 mb-5">
        <div class="px-6 py-3 font-bold border-b border-gray-300">Province List</div>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center gap-1">
                  <p>id</p>
                  <button @click="sortProvincesById">
                    <Icon icon="mdi:sort-numeric-ascending" width="15" v-if="activeOrderBy.id == 'desc'" />
                    <Icon icon="mdi:sort-numeric-descending" width="15" v-if="activeOrderBy.id == 'asc'" />
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center gap-1">
                  <p>name</p>
                  <button @click="sortProvincesByName">
                    <Icon icon="mdi:sort-alphabetical-ascending" width="15" v-if="activeOrderBy.name == 'desc'" />
                    <Icon icon="mdi:sort-alphabetical-descending" width="15" v-if="activeOrderBy.name == 'asc'" />
                  </button>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">wilayah_id</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b" v-for="province in resultProvinces">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ province.id }}</th>
              <td class="px-6 py-4">{{ province.name }}</td>
              <td class="px-6 py-4">{{ province.wilayah_id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutVue>
</template>
