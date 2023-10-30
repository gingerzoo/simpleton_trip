//在vite中动态引入路径（路径中包含别名@时）需要做一些处理，否则路径是不生效的
export const getAssetUrl = (imgUrl) => {
  //URL类接收两个参数,第一个参数是目标资源的相对路径；第二个参数是import.meta.url（当前文件的路径）
  return new URL(`../assets/imgs/${imgUrl}`, import.meta.url).href;
};
