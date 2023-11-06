import LxRequest from "../request/index.js";

export function getHomeHotWords() {
  return LxRequest.get({
    url: "/home/hotSuggests",
  });
}

export function getHomeCategories() {
  return LxRequest.get({
    url: "/home/categories",
  });
}

export function getHomeHouseList(curPage = 1) {
  return LxRequest.get({
    url: "/home/houselist",
    params: {
      page: curPage,
    },
  });
}
