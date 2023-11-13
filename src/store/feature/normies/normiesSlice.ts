import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import NormieStructure from "./types";

interface NormiesStateStructure {
  normies: NormieStructure[];
}

const initialState: NormiesStateStructure = { normies: [] };

const setIsFriend = (normieIsFriend: boolean | undefined) =>
  normieIsFriend ? undefined : true;

const setIsEnemy = (normieIsFriend: boolean | undefined) =>
  normieIsFriend === false ? undefined : false;

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
            ? setIsFriend(normie.isFriend)
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
            ? setIsEnemy(normie.isFriend)
            : normie.isFriend,
      })),
    }),
    addNewNormie: (
      currentState: NormiesStateStructure,
      action: PayloadAction<NormieStructure>,
    ): NormiesStateStructure => ({
      ...currentState,
      normies: [...currentState.normies, action.payload],
    }),
  },
});

export const {
  loadNormies: loadNormiesActionCreator,
  loveFriend: loveFriendActionCreator,
  killEnemy: killEnemyActionCreator,
  addNewNormie: addNewNormieActionCreator,
} = normiesSlice.actions;

export const normiesReducer = normiesSlice.reducer;
