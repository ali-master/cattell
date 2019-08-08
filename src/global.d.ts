// Store definitions
declare namespace Store {
	interface State {}

	interface Action {
		type: "TESTS";
		payload?: any;
	}
	type Reducer = (state: State, action: Action) => State;
}
