import * as R from "ramda";

export const initialState: Store.State = {};
export function reducer(state: Store.State, action: Store.Action): Store.State {
	const updateState = R.merge<Store.State>(state);

	switch (action.type) {
		case "TESTS":
			state = updateState({
				tests: action.payload,
			});
			break;

		default:
			return state;
	}

	return state;
}
