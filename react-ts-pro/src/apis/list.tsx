import { http } from "@/utills";
type ResType<T> = {
  message: string;
  data: T;
};

export type ChannelItem = {
  id: number;
  name: string;
};
type ChannelRes = {
  channels: ChannelItem[];
};

export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}
