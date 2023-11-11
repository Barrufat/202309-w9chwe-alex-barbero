import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import NormieStructure from "./types";

interface NormiesStateStructure {
  normies: NormieStructure[];
}

const initialState: NormiesStateStructure = { normies: [] };

const normiesSlice = createSlice({
  name: "normies",
  initialState: initialState,
  reducers: {
    loadNormies: (
      currentState: NormiesStateStructure,
      action: PayloadAction<NormieStructure[]>,
    ): NormiesStateStructure => ({
      ...currentState,
      normies: action.payload,
    }),
  },
});

export const { loadNormies: loadNormiesActionCreator } = normiesSlice.actions;

export const normiesReducer = normiesSlice.reducer;
