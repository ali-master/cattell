import * as React from "react";
// Global store contexts
import { MapDispatchContext, MapStateContext } from "hooks/globalState";
import { reducer, initialState } from "reducers/global";

const App: React.FC = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<MapStateContext.Provider value={state}>
			<MapDispatchContext.Provider value={dispatch}>
				salam
			</MapDispatchContext.Provider>
		</MapStateContext.Provider>
	);
};

export default App;
