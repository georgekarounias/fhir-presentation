import { MessageInstance } from "antd/lib/message";

export const AppRoutes = {
    Home: "home",
    Users: "users",
    HrMeassurments: "hr-meassurements",
    O2Meassurments: "o2-meassurements",
    BpMeassurments: "bp-meassurements",
    BgMeassurments: "bg-meassurements",
    Devices: "devices",
}

export const PublicUrl = process.env.PUBLIC_URL;
export const ImagesUrl = process.env.PUBLIC_URL + "/images/";

export const showErrorMessage = (messageApi:MessageInstance, message: string) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };