import dayjs from "dayjs";

export const formatMonthDay = (date) => {
  return dayjs(date).format("MM月DD日");
};
