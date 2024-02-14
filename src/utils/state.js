import { ref } from "vue";

export const showDialog = ref(false);
export const selectedUser = ref(undefined);

export function openDialog(user) {
  showDialog.value = true;
  selectedUser.value = user;
}

export function closeDialog() {
  showDialog.value = false;
  selectedUser.value = undefined;
}
