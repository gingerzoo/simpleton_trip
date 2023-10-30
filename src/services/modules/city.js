import LxRequest from "../request/index.js";

export function getCityAll() {
  return LxRequest.get({
    url: "/city/all",
  });
}
