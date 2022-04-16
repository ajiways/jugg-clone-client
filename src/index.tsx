import ReactDOM from "react-dom";
import App from "./App";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { io } from "socket.io-client";

const store = setupStore();

let host = "jugg-alpha-backend.herokuapp.com/";

if (process.env.NODE_ENV === "development") {
   console.log(process.env);
   host = process.env.REACT_APP_SERVER_URL!;
}

export const socket = io(host, {
   transports: ["websocket"],
});

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
