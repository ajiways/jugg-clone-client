import { socket } from "../..";
import { Location } from "../../components/interfaces/location.interface";
import { AuthResponse } from "../../components/interfaces/authResponse.interface";
import { Resource } from "../../components/interfaces/resource.interface";
import { UserCredentials, UserModel } from "../../models/user.model";
import { AppDispatch } from "../store";
import { addResources, addLocations } from "./objectsSlice";
import {
   addProgress,
   setErrorMessage,
   setIsGathering,
   setIsSuccess,
} from "./progressSlice";
import {
   changeStrategy,
   masteryUp,
   reduceFatigue,
   setFatigue,
   setLocation,
   setRatingList,
   setResource,
   setUser,
   setUserToLoad,
} from "./userSlice";
import { initRestore } from "../../gameLogic/fatigue.mechanic";
import { RatingItem } from "../../components/interfaces/rating.item.interface";

export const initSocket = () => {
   return (dispatch: AppDispatch) => {
      socket.on("progress.tick", (data: number) => {
         dispatch(addProgress(data));
      });

      socket.on(
         "gathering:complete",
         (data: { masteryUp: boolean; gathered: boolean }) => {
            dispatch(setIsSuccess(data.gathered));
            dispatch(setIsGathering(false));
            data.masteryUp && dispatch(masteryUp());
            setTimeout(() => dispatch(setIsSuccess(null)), 1500);
         }
      );

      socket.on("strategy:change", (data: number) => {
         dispatch(changeStrategy(data));
      });

      socket.on("resource:get:list", (data: Resource[]) => {
         dispatch(addResources(data));
      });

      socket.on("location:get:list", (data: Location[]) => {
         dispatch(addLocations(data));
      });

      socket.on("auth:register:response", (data: AuthResponse) => {
         dispatch(setUser(data));
      });

      socket.on("auth:login:response", (data: AuthResponse) => {
         dispatch(setUser(data));
      });

      socket.on("gather:start:error", (data: { message: string }) => {
         dispatch(setErrorMessage(data.message));
         dispatch(setIsGathering(false));
         setTimeout(() => dispatch(setErrorMessage("")), 1500);
      });

      socket.on("user:update:user", (data: AuthResponse) => {
         dispatch(setUser(data));
      });

      socket.on("fatigue:update", (newValue: number) => {
         dispatch(setFatigue(newValue));
      });

      socket.on("rating:get:list:response", (data: RatingItem[]) => {
         dispatch(setRatingList(data));
      });
   };
};

export const startGather = (
   resource: Resource,
   currFatigue: number,
   login: string
) => {
   return (dispatch: AppDispatch) => {
      if (currFatigue < resource.fatigueReq) {
         return;
      }

      socket.emit("game:gather:start", { resource, login });
      dispatch(reduceFatigue(resource.fatigueReq));
      dispatch(setIsGathering(true));
      initRestore(login);
   };
};

export const changeSelectedStrategy = (data: { id: number; login: string }) => {
   socket.emit("gathering:strategy:change", { id: data.id, login: data.login });
};

export const getIntoLocation = (location: Location) => {
   return (dispatch: AppDispatch) => {
      dispatch(setLocation(location));
   };
};

export const changeResource = (resource: Resource) => {
   return (dispath: AppDispatch) => {
      dispath(setResource(resource));
   };
};

export const emitRegister = (userData: UserCredentials) => {
   socket.emit("auth:register", userData);
};

export const emitLogin = (userData: UserCredentials) => {
   socket.emit("auth:login", userData);
};

export const setUserFromLocalStorage = (user: UserModel) => {
   return (dispath: AppDispatch) => {
      dispath(setUserToLoad(user));
   };
};

export const emitGetRatingList = () => {
   socket.emit("rating:get:list");
};
