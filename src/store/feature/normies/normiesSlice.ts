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
    loveFriend: (
      currentState: NormiesStateStructure,
      action: PayloadAction<number>,
    ): NormiesStateStructure => ({
      ...currentState,
      normies: currentState.normies.map((normie) => ({
        ...normie,
        isFriend:
          normie.id === action.payload
            ? normie.isFriend
              ? undefined
              : true
            : normie.isFriend,
      })),
    }),
    killEnemy: (
      currentState: NormiesStateStructure,
      action: PayloadAction<number>,
    ): NormiesStateStructure => ({
      ...currentState,
      normies: currentState.normies.map((normie) => ({
        ...normie,
        isFriend:
          normie.id === action.payload
            ? normie.isFriend === false
              ? undefined
              : false
            : normie.isFriend,
      })),
    }),
  },
});

export const {
  loadNormies: loadNormiesActionCreator,
  loveFriend: loveFriendActionCreator,
  killEnemy: killEnemyActionCreator,
} = normiesSlice.actions;

export const normiesReducer = normiesSlice.reducer;
