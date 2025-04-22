import { useEffect, useState } from "react";
import "./style.css";
import { fetchChannelAPI, ChannelItem } from "@/apis/list";

const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      const res = await fetchChannelAPI();
      setChannels(res.data.data.channels);
      console.log(res);
    };
    getChannels();
    console.log(channels);
  }, []);
  return (
    <div>
      <div className="tabContainer">{}</div>
    </div>
  );
};

export default Home;
