<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import { openDialog } from "../utils/state";
import DialogVue from "./Dialog.vue";

const userList = ref();

function getUser() {
  return axios.get("https://api.slingacademy.com/v1/sample-data/users").then((result) => {
    const { users } = result.data;
    userList.value = users;
  });
}

onMounted(() => {
  getUser();
});
</script>

<template>
  <div class="py-[31px]">
    <div class="relative overflow-x-auto shadow sm:rounded-lg">
      <div class="bg-white px-6 py-4 rounded-s-xl rounded-e-xl">
        <p class="font-semibold text-[17px]">User List</p>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 whitespace-nowrap">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-y-2">
          <tr class="uppercase">
            <th scope="col" class="px-6 py-4">id</th>
            <th scope="col" class="px-6 py-4">user</th>
            <th scope="col" class="px-6 py-4 text-nowrap">date of birth</th>
            <th scope="col" class="px-6 py-4">email</th>
            <th scope="col" class="px-6 py-4">job</th>
            <th scope="col" class="px-6 py-4">country</th>
            <th scope="col" class="px-6 py-4">action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50" v-for="user in userList">
            <td class="px-6 py-4">{{ user.id }}</td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-x-3">
                <img class="w-10 h-10 rounded-full" :src="user.profile_picture" :alt="user.first_name" />
                <span>{{ user.first_name }} {{ user.last_name }}</span>
              </div>
            </td>
            <td class="px-6 py-4 text-nowrap">{{ dayjs(user.date_of_birth).format("DD / MM / YYYY") }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.job }}</td>
            <td class="px-6 py-4">{{ user.country }}</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <button type="button" class="text-[#080808] bg-white border-[1px] shadow hover:bg-slate-200 focus:ring-4 focus:ring-slate-300 font-medium rounded-md text-sm px-5 py-2 me-2 mb-2 focus:outline-none">Select</button>
                <button type="button" @click="() => openDialog(user)" class="text-[#080808] bg-white border-[1px] shadow hover:bg-slate-200 focus:ring-4 focus:ring-slate-300 font-medium rounded-md text-sm px-5 py-2 me-2 mb-2 focus:outline-none">View Detail</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <DialogVue />
</template>

<!-- {
  "id": 1,
  "gender": "female",
  "date_of_birth": "2002-04-26T00:00:00",
  "job": "Herbalist",
  "city": "Humphreyfurt",
  "zipcode": "79574",
  "latitude": 13.032103,
  "profile_picture": "https://api.slingacademy.com/public/sample-users/1.png",
  "first_name": "Kayla",
  "email": "kayla.lopez.1@slingacademy.com",
  "last_name": "Lopez",
  "phone": "+1-697-415-3345x5215",
  "street": "3388 Roger Wells Apt. 010",
  "state": "Vermont",
  "country": "Jordan",
  "longitude": 112.16014
} -->
