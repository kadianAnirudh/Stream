"use client";

import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  LoadingIndicator,
  ChannelList,
} from "stream-chat-react";

import Logo from "../Images/streamLogo.png";

import "stream-chat-react/dist/css/v2/index.css";

const apiKey = "33am8dam9y3v";

const user = {
  id: "john",
  name: "John Snow",
  image:
    "https://getstream.io/random_png/?id=delicate-art-0&name=delicate-art-0",
};

const page = () => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel("messaging", "react-talk", {
        image:
          "https://getstream.io/random_png/?id=delicate-art-0&name=delicate-art-0",
        name: "Talk about React",
        members: [user.id],
      });

      await channel.watch();

      setChannel(channel);
      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, []);

  if (!channel || !client) return <LoadingIndicator />;

  return (
    <div className="h-screen">
      <Chat client={client} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default page;
