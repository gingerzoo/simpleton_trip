// getCityAll().then((res) => {
//     console.log(res);
//     allCity.value = res.data;
//   });

import { defineStore } from "pinia";
import { getCityAll } from "@/services";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    curCity: {},
  }),
  actions: {
    async fetchAllCitiesAction() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});

export default useCityStore;
