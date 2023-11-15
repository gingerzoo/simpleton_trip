import dayjs from "dayjs";

export const formatMonthDay = (date, formaton = "MM月DD日") => {
  return dayjs(date).format(formaton);
};

export const getDiffDays = (start, end) => {
  return dayjs(end).diff(start, "day");
};
