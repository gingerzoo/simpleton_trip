import LxRequest from "../request/index.js";

export function getDetailInfos(houseId) {
  return LxRequest.get({
    url: "/detail/infos",
    params: {
        houseId
    }
  });
}