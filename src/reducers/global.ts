import * as R from "ramda";

export const initialState: Store.StateBackbone = {};
export function reducer(state: Store.StateBackbone, action: Store.Action): Store.StateBackbone {
	const updateState = R.merge<Store.StateBackbone>(state);

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
