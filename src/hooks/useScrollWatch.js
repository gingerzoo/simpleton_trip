import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

// 如何自定义钩子
const useScrollWatch = (elRef, callBackFun) => {
  let el = window;
  const IsBottom = ref(false);
  const scrollHeight = ref(0);
  const viewHeight = ref(0);
  const scrollTop = ref(0);
  const scrollLaLa = throttle(() => {
    if (el === window) {
      scrollHeight.value = window.document.documentElement.scrollHeight;
      viewHeight.value = window.document.documentElement.clientHeight;
      scrollTop.value = window.document.documentElement.scrollTop;
    }
    else {
      viewHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }

    if (scrollTop.value + viewHeight.value >= scrollHeight.value - 1) {
      console.log("到底了到底了！！！");
      IsBottom.value = true;
      if (callBackFun) {
        callBackFun();
      }
    }
  }, 300);

  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener("scroll", scrollLaLa);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollLaLa);
  });

  return { IsBottom, scrollHeight, scrollTop, viewHeight };
};

export default useScrollWatch;
