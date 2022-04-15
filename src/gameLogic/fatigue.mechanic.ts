import { socket } from "..";

export const initRestore = (login: string) => {
   socket.emit("player:fatigue:update:start", {
      login,
   });
};
