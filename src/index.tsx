import ReactDOM from "react-dom";
import App from "./App";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { io } from "socket.io-client";

const store = setupStore();

export const socket = io("http://192.168.31.5:4000", {
   transports: ["websocket"],
});

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
