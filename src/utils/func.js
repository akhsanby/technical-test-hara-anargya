import province from "../assets/js/province.js";
import city from "../assets/js/city.js";
import { ref } from "vue";

export const resultCities = ref(undefined);
export const resultProvinceName = ref(undefined);
export const resultProvinces = ref(undefined);
export const activeOrderBy = ref({
  id: "asc",
  name: "asc",
});

export function getCitiesByProvinceId(provinceId) {
  const result = city.filter((city) => city.provinsi_id === provinceId);
  resultCities.value = result;
}

export function getProvinceNameByCityId(cityId) {
  const cityData = city.find((city) => city.id === cityId);
  if (cityData && cityData.provinsi_id !== undefined) {
    const provinceId = cityData.provinsi_id;
    const result = province.find((province) => province.id === provinceId).name;
    resultProvinceName.value = result;
  }
}

export function sortProvincesById() {
  if (activeOrderBy.value.id === "asc") {
    const result = province.sort((a, b) => a.id - b.id);
    resultProvinces.value = result;
    activeOrderBy.value.id = "desc";
  } else if (activeOrderBy.value.id === "desc") {
    const result = province.sort((a, b) => b.id - a.id);
    resultProvinces.value = result;
    activeOrderBy.value.id = "asc";
  }
}

export function sortProvincesByName() {
  if (activeOrderBy.value.name === "asc") {
    const result = province.sort((a, b) => a.name.localeCompare(b.name));
    resultProvinces.value = result;
    activeOrderBy.value.name = "desc";
  } else if (activeOrderBy.value.name === "desc") {
    const result = province.sort((a, b) => b.name.localeCompare(a.name));
    resultProvinces.value = result;
    activeOrderBy.value.name = "asc";
  }
}
