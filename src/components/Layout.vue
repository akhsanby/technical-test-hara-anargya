<script setup>
import { Icon } from "@iconify/vue";
import Logo from "../assets/icons/logo.svg";
import { useRoute } from "vue-router";

const route = useRoute();

const activeMenu = "bg-[#E3F2FD] rounded-lg";
</script>

<template>
  <div class="bg-[#f7f8fa] w-screen h-screen overflow-x-hidden">
    <div class="grid grid-cols-2">
      <div class="bg-white w-[18%] max-w-[20%] h-screen fixed shadow-md p-10">
        <img :src="Logo" alt="logo" class="w-[118px]" />
        <ul class="my-4 space-y-2">
          <router-link to="/dashboard">
            <li class="flex items-center gap-x-1 px-4 py-2" :class="route.path == '/dashboard' && activeMenu">
              <Icon icon="solar:home-smile-linear" />
              Dashboard
            </li>
          </router-link>
          <router-link to="/overview">
            <li class="flex items-center gap-x-1 px-4 py-2" :class="route.path == '/overview' && activeMenu">
              <Icon icon="solar:course-up-linear" />
              Overview
            </li>
          </router-link>
        </ul>
      </div>
      <nav class="flex z-10 items-center bg-white fixed shadow-md left-[18%] w-[calc(100vw-18%)] h-[65px]">
        <p class="ml-7 font-semibold">Convertion</p>
      </nav>
    </div>
    <main class="relative left-[18%] top-[90px] w-[calc(100vw-18%)] px-7">
      <slot></slot>
    </main>
  </div>
</template>
