import { DateTime } from "luxon";

export const formatDate = (date?: Date) => {
  return DateTime.fromJSDate(date as Date).toFormat("dd-MM-yyyy");
};
