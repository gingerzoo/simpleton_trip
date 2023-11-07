import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

const useScrollWatch = (callBackFun) => {
  const IsBottom = ref(false);
  const scrollHeight = ref(0);
  const viewHeight = ref(0);
  const scrollTop = ref(0);
  const scrollLaLa = throttle(() => {
    scrollHeight.value = window.document.documentElement.scrollHeight;
    viewHeight.value = window.document.documentElement.clientHeight;
    scrollTop.value = window.document.documentElement.scrollTop;
    console.log("这是没调用钩子函数吗");

    console.log(scrollHeight, viewHeight, scrollTop);

    if (scrollTop.value + viewHeight.value >= scrollHeight.value - 1) {
      console.log("到底了到底了！！！");
      IsBottom.value = true;
      if (callBackFun) {
        callBackFun();
      }
    }
  }, 0);

  onMounted(() => {
    window.addEventListener("scroll", scrollLaLa);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollLaLa);
  });

  return { IsBottom, scrollHeight, scrollTop, viewHeight };
};

export default useScrollWatch;
