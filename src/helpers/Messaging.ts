import { convertDatetoIsoStringWithoutTimeZone } from "./DateHandler";

export const setInfoMessagge = (
  messageBase: string,
  recordsCount: number,
  userId?: number,
  startDate?: Date,
  endDate?: Date
) => {
  const msg = messageBase
    .replace("_recordsLength_", recordsCount.toString())
    .replace("_userId_", userId?.toString() ?? "_")
    .replace(
      "_startDate_",
      startDate
        ? convertDatetoIsoStringWithoutTimeZone(startDate).slice(0, 10)
        : "_"
    )
    .replace(
      "_endDate_",
      endDate
        ? convertDatetoIsoStringWithoutTimeZone(endDate).slice(0, 10)
        : "_"
    );
  return msg;
};
