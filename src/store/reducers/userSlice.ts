import { UserModel } from "../../models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resource } from "../../components/interfaces/resource.interface";
import { Location } from "../../components/interfaces/location.interface";
import { AuthResponse } from "../../components/interfaces/authResponse.interface";
import { RatingItem } from "../../components/interfaces/rating.item.interface";
import { Message } from "../../components/interfaces/message.interface";

interface UserState {
   user: UserModel | null;
   progress: number;
   currentStrategy: number | null;
   selectedResource: Resource | null;
   currentLocation: Location | null;
   ratingList: RatingItem[];
   messages: Message[];
}

const initialState: UserState = {
   user: null,
   progress: 0,
   currentStrategy: null,
   selectedResource: null,
   currentLocation: null,
   ratingList: [],
   messages: [],
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser(state, action: PayloadAction<AuthResponse>) {
         if (action.payload.error) {
            return;
         }

         if (action.payload.user) {
            state.user = action.payload.user;
            localStorage.setItem("user", JSON.stringify(action.payload.user));
         }
      },
      setUserToLoad(state, action: PayloadAction<UserModel>) {
         state.user = action.payload;
      },
      setResource(state, action: PayloadAction<Resource>) {
         state.selectedResource = action.payload;
      },
      setLocation(state, action: PayloadAction<Location>) {
         state.currentLocation = action.payload;
      },
      changeStrategy(state, action: PayloadAction<number>) {
         state.currentStrategy = action.payload;
      },
      reduceFatigue(state, action: PayloadAction<number>) {
         if (!state.user) return;
         state.user.fatigue -= action.payload;
      },
      restoreFatigue(state, action: PayloadAction<number>) {
         if (!state.user) return;

         const newFatigueLevel = state.user.fatigue + action.payload;

         if (newFatigueLevel === 101) return;

         state.user.fatigue = newFatigueLevel;
      },
      masteryUp(state) {
         if (!state.user) return;
         state.user.mastery = state.user?.mastery + 1;
      },
      setFatigue(state, action: PayloadAction<number>) {
         if (!state.user) return;

         state.user.fatigue = action.payload;
      },
      setRatingList(state, action: PayloadAction<RatingItem[]>) {
         state.ratingList = action.payload;
      },
      setMessage(state, action: PayloadAction<Message>) {
         state.messages = [...state.messages, action.payload];
      },
      setMessages(state, action: PayloadAction<Message[]>) {
         state.messages = action.payload;
      },
   },
   extraReducers: {},
});

export default userSlice.reducer;
export const {
   reduceFatigue,
   restoreFatigue,
   changeStrategy,
   setResource,
   setLocation,
   setUser,
   setUserToLoad,
   masteryUp,
   setFatigue,
   setRatingList,
   setMessage,
   setMessages,
} = userSlice.actions;
