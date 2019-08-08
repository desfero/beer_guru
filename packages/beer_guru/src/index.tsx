import "./polyfills";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { initConfig } from "./init";

initConfig();

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
