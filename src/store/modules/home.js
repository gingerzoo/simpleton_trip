import { getHomeHotWords } from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotWords: {},
  }),
  actions: {
    async fetchHomeHotWords() {
      const res = await getHomeHotWords();
      this.hotWords = res.data;
    },
  },
});

export default useHomeStore;
