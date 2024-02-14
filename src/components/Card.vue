<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps(["item"]);
</script>

<template>
  <div class="w-full h-[143px] bg-white rounded-lg p-5 shadow flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <div>
        <p class="text-[12px] font-semibold text-[#727272]">{{ props.item.status }}</p>
        <p class="mt-[3px] text-[20px] font-semibold text-[#080808]">{{ props.item.balance }}</p>
      </div>
      <div class="bg-[#F2F4F7] rounded-lg w-[35px] h-[35px] flex items-center justify-center">
        <Icon icon="solar:square-transfer-horizontal-broken" width="23" />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="font-semibold text-[11px] flex" :class="props.item.other.increase ? 'text-[#4CBF93]' : 'text-[#EE7C85]'">
          <Icon icon="ph:arrow-up-bold" :class="props.item.other.increase ? 'rotate-45' : 'rotate-[135deg]'" width="15" />
          {{ props.item.other.percent }}</span
        >
        <span class="ml-2 font-medium text-[11px] text-[#AAAAAA]">Last Month</span>
      </div>
      <div>
        <p class="text-[#6E6E6E] text-[11px] font-semibold">View More</p>
      </div>
    </div>
  </div>
</template>
