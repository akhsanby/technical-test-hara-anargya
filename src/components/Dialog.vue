<script setup>
import dayjs from "dayjs";
import { showDialog, selectedUser, closeDialog } from "../utils/state.js";
</script>

<template>
  <Transition name="zoom">
    <div v-if="showDialog" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full z-50 bg-black bg-opacity-50">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow border-[1px] border-black">
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <button @click="closeDialog" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="grid grid-cols-2 justify-items-center gap-2">
              <img class="w-[150px] h-[150px] rounded-full" :src="selectedUser.profile_picture" :alt="selectedUser.first_name" />
              <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200 rounded-t-lg">
                  <Icon icon="solar:user-bold" width="15" class="me-2.5" />
                  {{ selectedUser.first_name }} {{ selectedUser.last_name }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200">
                  <Icon icon="ic:outline-email" width="15" class="me-2.5" />
                  {{ selectedUser.email }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200">
                  <Icon icon="solar:phone-bold" width="15" class="me-2.5" />
                  {{ selectedUser.phone }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200">
                  <Icon icon="mdi:gender-male" width="15" class="me-2.5" />
                  {{ selectedUser.gender }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200">
                  <Icon icon="mdi:user-tie" width="15" class="me-2.5" />
                  {{ selectedUser.job }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 rounded-b-lg">
                  <Icon icon="ic:baseline-date-range" width="15" class="me-2.5" />
                  {{ dayjs(selectedUser.date_of_birth).format("DD / MM / YYYY") }}
                </li>
              </ul>
              <ul class="col-span-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200 rounded-t-lg">
                  <Icon icon="mdi:location" width="15" class="me-2.5" />
                  {{ selectedUser.street }}, {{ selectedUser.zipcode }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 border-b border-gray-200">
                  <Icon icon="mdi:city" width="15" class="me-2.5" />
                  {{ selectedUser.city }}
                </li>
                <li class="w-full inline-flex items-center px-4 py-2 rounded-b-lg">
                  <Icon icon="mdi:globe" width="15" class="me-2.5" />
                  {{ selectedUser.state }} {{ selectedUser.country }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
.zoom-enter-active {
  animation: zoomIn 0.2s;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
.zoom-leave-active {
  animation: zoomOut 0.2s;
}
</style>
