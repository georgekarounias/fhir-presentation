import { convertDatetoIsoStringWithoutTimeZone } from "./DateHandler";

export const setInfoMessagge = (
  messageBase: string,
  recordsCount: number,
  userId?: number,
  startDate?: Date,
  endDate?: Date
) => {
  const msg = messageBase
    .replace("_0_", recordsCount.toString())
    .replace("_1_", userId?.toString() ?? "_")
    .replace(
      "_2_",
      startDate
        ? convertDatetoIsoStringWithoutTimeZone(startDate).slice(0, 10)
        : "_"
    )
    .replace(
      "_3_",
      endDate
        ? convertDatetoIsoStringWithoutTimeZone(endDate).slice(0, 10)
        : "_"
    );
  return msg;
};
