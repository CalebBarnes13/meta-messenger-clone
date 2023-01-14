import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1538099",
  key: "b10258f5add9a7a77565",
  secret: "97fc588b16c8800158e2",
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("b10258f5add9a7a77565", {
  cluster: "us2",
  forceTLS: true,
});
