import React, { createContext, useContext } from "react";
// Utilities and hooks or store
import * as R from "ramda";
import { initialState } from "reducers/global";

// Contexts
export const MapStateContext = createContext(initialState);
export const MapDispatchContext = createContext((() => 0) as React.Dispatch<Store.Action>);

// Hooks
export const useDispatch = () => React.useContext(MapDispatchContext);

export const useStore = (...props: string[]): Store.State => {
	const state: Store.State = useContext(MapStateContext);

	return R.not(R.isEmpty(props)) ? R.pick(props)(state) : state;
};
