import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../components/interfaces/location.interface";
import { Resource } from "../../components/interfaces/resource.interface";

interface InitObjectsState {
   resources: Resource[];
   locations: Location[];
}

const initialState: InitObjectsState = {
   resources: [],
   locations: [],
};

const objectsSlice = createSlice({
   name: "objects",
   initialState,
   reducers: {
      addResources(state, action: PayloadAction<Resource[]>) {
         state.resources = action.payload;
      },
      addLocations(state, action: PayloadAction<Location[]>) {
         state.locations = action.payload;
      },
   },
});

export default objectsSlice.reducer;
export const { addResources, addLocations } = objectsSlice.actions;
