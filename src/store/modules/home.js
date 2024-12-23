import {
  getHomeCategories,
  getHomeHotWords,
  getHomeHouseList,
} from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotWords: [],
    categories: [],
    houseList: [],
    currentPage: 0,
  }),
  actions: {
    async fetchHomeHotWords() {
      const res = await getHomeHotWords();
      this.hotWords = res.data;
    },
    async fetchHomeCategories() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHomeHouseList() {
      this.currentPage++;
      const res = await getHomeHouseList(this.currentPage);
      // this.houseList = res.data;
      this.houseList.push(...res.data);
      console.log("fetchHomeHouseList被调用---currentPage------",this.currentPage)

    },
  },
});

export default useHomeStore;
