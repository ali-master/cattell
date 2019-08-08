import React from "react";
import ReactDOM from "react-dom";
// Components
import App from "./App";
// Service worker
import * as serviceWorker from "./serviceWorker";
// Styles
import "scss/index.scss";

// Render App component
ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "production") {
	serviceWorker.register();
} else {
	serviceWorker.unregister();
}
