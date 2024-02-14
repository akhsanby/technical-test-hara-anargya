<script setup>
import LayoutVue from "../components/Layout.vue";
import CardVue from "../components/Card.vue";
import TableVue from "../components/Table.vue";

const CardItem = [
  {
    status: "Pending",
    balance: "2.480,30",
    other: {
      increase: true,
      percent: "2,15%",
    },
  },
  {
    status: "Paid",
    balance: "84.310",
    other: {
      increase: false,
      percent: "1,10%",
    },
  },
  {
    status: "Rejected",
    balance: "12.155",
    other: {
      increase: true,
      percent: "2,15%",
    },
  },
];
</script>

<template>
  <LayoutVue>
    <div class="flex gap-x-[23px]">
      <template v-for="item in CardItem">
        <CardVue :item="item" />
      </template>
    </div>
    <TableVue />
  </LayoutVue>
</template>
