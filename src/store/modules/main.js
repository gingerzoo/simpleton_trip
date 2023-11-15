import { defineStore } from "pinia";

const nowDate = new Date();
const endDate = new Date();
endDate.setDate(nowDate.getDate() + 1);
const useMainStore = defineStore("main", {
  state: () => ({
    token: "",
    startDate: nowDate,
    endDate: endDate,
    isLoading: true,
  }),
});

export default useMainStore;
