import dayjs from "dayjs";

export const formatMonthDay = (date) => {
  return dayjs(date).format("MM月DD日");
};

export const getDiffDays = (start, end) => {
  return dayjs(end).diff(start, "day");
};
