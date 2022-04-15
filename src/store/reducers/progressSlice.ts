import { createSlice } from "@reduxjs/toolkit";

interface InitProgressState {
   progress: number;
   isGathering: boolean;
   isSuccess: boolean | null;
   errorMessage: string;
}

const initialState: InitProgressState = {
   progress: 0,
   isGathering: false,
   isSuccess: null,
   errorMessage: "",
};

const progressSlice = createSlice({
   name: "progress",
   initialState,
   reducers: {
      addProgress(state, action) {
         state.progress = action.payload;
      },
      setIsGathering(state, action) {
         state.isGathering = action.payload;
      },
      setIsSuccess(state, action) {
         state.isSuccess = action.payload;
      },
      setErrorMessage(state, action) {
         state.errorMessage = action.payload;
      },
   },
});

export default progressSlice.reducer;
export const { addProgress, setIsGathering, setIsSuccess, setErrorMessage } =
   progressSlice.actions;
