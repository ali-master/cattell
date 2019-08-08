// Store definitions
declare namespace Store {
	interface StateBackbone {}

	interface Action {
		type: "TESTS";
		payload?: any;
	}
	type Reducer = (state: StateBackbone, action: Action) => StateBackbone;
}
