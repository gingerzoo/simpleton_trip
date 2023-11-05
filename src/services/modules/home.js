import LxRequest from "../request/index.js";

export function getHomeHotWords() {
  return LxRequest.get({
    url: "/home/hotSuggests",
  });
}
